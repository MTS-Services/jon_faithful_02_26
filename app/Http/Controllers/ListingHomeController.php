<?php

namespace App\Http\Controllers;

use App\Enums\ActiveInactive;
use App\Enums\ExternalListingType;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;
use App\Mail\FoundingExternalSubmitionMail;
use App\Mail\ListingSubmittedAdminMail;
use App\Mail\ListingSubmittedUserMail;
use App\Models\City;
use App\Models\ExternalListingSubmission;
use App\Models\Facility;
use App\Models\Listing;
use App\Models\ListingGallery;
use App\Services\ListingHomeService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;
use Inertia\Response;

class ListingHomeController extends Controller
{

    protected $listingService;

    public function __construct(ListingHomeService $listingService)
    {
        $this->listingService = $listingService;
    }
    public function listings(Request $request): Response
    {
        $listing = Listing::where('user_id', $request->user()->id)->with('city')->paginate(10);
        return Inertia::render('user/listings-homes/listings', [
            'listings' => $listing
        ]);
    }
    public function addListing(): Response
    {
        $cities = City::all(['id', 'name']);
        $facilities = Facility::all(['id', 'name']);

        return Inertia::render('user/listings-homes/add-listing-home', [
            'cities' => $cities,
            'facilities' => $facilities,
            'propertyTypes' => collect(ListingProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
            'propertyStatuses' => collect(ListingStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ])
        ]);
    }

    public function addListingStore(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'listing_status' => ['required', new Enum(ListingStatus::class)],
            'property_type' => ['required', new Enum(ListingProperty::class)],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'youtube_video_url' => ['nullable', 'url'],
            'gallery_images.*' => ['nullable', 'image', 'max:25600'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
        ]);

        $validated['user_id'] = $request->user()->id;
        $validated['status'] = ActiveInactive::ACTIVE->value;

        $listing = $this->listingService->createListing($validated, $request);

        // Using sync ensures the pivot table is updated correctly
        if ($request->has('facilities')) {
            $listing->facilities()->sync($request->input('facilities', []));
        }

        $listing->load('facilities', 'city');
        // 🔹 Send mail to user
        Mail::to($listing->user->email)
            ->send(new ListingSubmittedUserMail($listing));

        // 🔹 Send mail to admin
        Mail::to(config('mail.from.address')) // or hardcode admin email
            ->send(new ListingSubmittedAdminMail($listing));

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'Listing submitted successfully and is pending review.');
    }
    public function addListingLinkStore(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'external_link' => ['required', 'url', 'max:1000'],
        ]);
        
        $validated['user_id'] = $request->user()->id;
        $validated['external_listing_type'] = ExternalListingType::LISTING->value;

        $this->listingService->submitExternalListing($validated);

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'External listing link submitted successfully.');
    }

    public function editListing($id): Response
    {
        $listing = Listing::findOrFail($id)->load('facilities');

        $cities = City::all(['id', 'name']);
        $currentFacilityIds = $listing->facilities->pluck('id')->toArray();

        return Inertia::render('user/listings-homes/edit-listing-home', [
            'listing' => [
                ...$listing->toArray(),
                'facilities' => $currentFacilityIds
            ],
            'cities' => $cities,
            'facilities' => Facility::all(['id', 'name']),
            'propertyTypes' => collect(ListingProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
            'propertyStatuses' => collect(ListingStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ])
        ]);
    }

    public function updateListing(Request $request, $id)
    {
        $listing = Listing::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'listing_status' => ['required', new Enum(ListingStatus::class)],
            'property_type' => ['required', new Enum(ListingProperty::class)],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'youtube_video_url' => ['nullable', 'url'],
            'gallery_images.*' => ['nullable', 'image', 'max:25600'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
        ]);

        $listing = $this->listingService->updateListing($listing, $validated, $request);

        // Using sync ensures the pivot table is updated correctly
        if ($request->has('facilities')) {
            $listing->facilities()->sync($request->input('facilities', []));
        }

        $this->listingService->updateListing($listing, $validated, $request);

        $listing->load('facilities', 'city');
        // 🔹 Send mail to user
        Mail::to($listing->user->email)
            ->send(new ListingSubmittedUserMail($listing, false));

        // 🔹 Send mail to admin
        Mail::to(config('mail.from.address')) // or hardcode admin email
            ->send(new ListingSubmittedAdminMail($listing, false));

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'Listing updated successfully.');
    }


    public function deleteListing(): Response
    {
        return Inertia::render('user/listings-homes/delete-listing-home');
    }
}
