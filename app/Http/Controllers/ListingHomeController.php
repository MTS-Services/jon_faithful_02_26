<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Listing;
use App\Enums\ListingStatus;
use Illuminate\Http\Request;
use App\Enums\ActiveInactive;
use App\Enums\ListingProperty;
use App\Models\ListingGallery;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Models\ExternalListingSubmission;
use App\Mail\FoundingExternalSubmitionMail;
use App\Services\ListingHomeService;

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

        return Inertia::render('user/listings-homes/add-listing-home', [
            'cities' => $cities,
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
            'description' => ['required', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'listing_status' => ['required', 'string'],
            'property_type' => ['required', 'string'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'], // 10MB max
            'gallery_images.*' => ['nullable', 'image', 'max:25600'], // 25MB max per image
        ]);

        $this->listingService->createListing($validated, $request);

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'Listing submitted successfully and is pending review.');
    }


    // public function addListingLinkStore(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => ['required', 'string', 'max:255'],
    //         'email' => ['required', 'email', 'max:255'],
    //         'external_link' => ['required', 'url', 'max:1000'],
    //     ]);

    //     // Store the external listing submission
    //     // You might want to create a separate table for this
    //     $submission = ExternalListingSubmission::create([
    //         'user_id' => auth()->id(),
    //         // 'listing_id' => null,
    //         // 'listing_type' => Listing::class,
    //         'name' => $validated['name'],
    //         'email' => $validated['email'],
    //         'external_link' => $validated['external_link'],
    //     ]);
    //     Mail::to('info@whytennessee.com')->send(new FoundingExternalSubmitionMail($submission));

    //     return redirect()
    //         ->route('user.dashboard')
    //         ->with('success', 'External listing link submitted successfully.');
    // }
    public function addListingLinkStore(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'external_link' => ['required', 'url', 'max:1000'],
        ]);

        $this->listingService->submitExternalListing($validated);

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'External listing link submitted successfully.');
    }

    public function editListing($id): Response
    {
        $listing = Listing::findOrFail($id);

        $cities = City::all(['id', 'name']);

        return Inertia::render('user/listings-homes/edit-listing-home', [
            'listing' => $listing,
            'cities' => $cities,
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
        $listing = Listing::where('user_id', auth()->id())
            ->findOrFail($id);

        $validated = $request->validate([
            'title'                 => ['required', 'string', 'max:500'],
            'description'           => ['required', 'string'],
            'purchase_price'        => ['required', 'numeric', 'min:0'],
            'city_id'               => ['required', 'exists:cities,id'],
            'listing_status'        => ['required', 'string'],
            'property_type'         => ['required', 'string'],
            'bedrooms'              => ['required', 'integer', 'min:0'],
            'bathrooms'             => ['required', 'integer', 'min:0'],
            'square_feet'           => ['required', 'integer', 'min:0'],
            'primary_image_url'     => ['nullable', 'image', 'max:10240'],   // 10MB
            'gallery_images'        => ['nullable', 'array'],
            'gallery_images.*'      => ['image', 'max:25600'],               // 25MB each
        ]);

        $this->listingService->updateListing($listing, $validated, $request);

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'Listing updated successfully.');
    }


    public function deleteListing(): Response
    {
        return Inertia::render('user/listings-homes/delete-listing-home');
    }
}
