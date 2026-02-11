<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use App\Models\ListingGallery;
use App\Services\RentalService;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Models\ExternalListingSubmission;
use App\Mail\FoundingExternalSubmitionMail;

class ListingRentalController extends Controller
{

    protected $rentalService;

    public function __construct(RentalService $rentalService)
    {
        $this->rentalService = $rentalService;
    }
    /**
     * Display a listing of user's rental listings
     */
    public function listings(): Response
    {
        $rentals = Rental::with('city')
            ->where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('user/listings-rentals/listings', [
            'rentals' => $rentals
        ]);
    }

    /**
     * Show the form for creating a new rental listing
     */
    public function addListing(): Response
    {
        $cities = City::all(['id', 'name']);

        return Inertia::render('user/listings-rentals/add-listing-rental', [
            'cities' => $cities,
            'propertyTypes' => collect(RentalProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
        ]);
    }

    /**
     * Store a newly created rental listing
     */
    // public function storeListing(Request $request): RedirectResponse
    // {
    //     $validated = $request->validate([
    //         'listing_title' => ['required', 'string', 'max:500'],
    //         'description' => ['required', 'string'],
    //         'purchase_price' => ['required', 'numeric', 'min:0'],
    //         'city_id' => ['required', 'exists:cities,id'],
    //         'property_type' => ['required', 'string'],
    //         'security_deposit' => ['required', 'numeric', 'min:0'],
    //         'lease_length' => ['required', 'integer', 'min:1'],
    //         'bedrooms' => ['required', 'integer', 'min:0'],
    //         'bathrooms' => ['required', 'integer', 'min:0'],
    //         'square_feet' => ['required', 'integer', 'min:0'],
    //         'pet_friendly' => ['required', 'in:yes,no'],
    //         'parking_garage' => ['required', 'integer', 'min:0'],
    //         'primary_image' => ['nullable', 'image', 'max:10240'], // 10MB max
    //         'gallery_images.*' => ['nullable', 'image', 'max:51200'], // 50MB max per image
    //     ]);

    //     // Handle primary image upload
    //     $primaryImageUrl = null;
    //     if ($request->hasFile('primary_image')) {
    //         $file = $request->file('primary_image');
    //         $primaryImageUrl = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
    //         $file->storeAs('rentals/primary', $primaryImageUrl);
    //     }

    //     // Convert pet_friendly to boolean
    //     $petFriendly = $validated['pet_friendly'] === 'yes';

    //     // Create the rental listing
    //     $rental = Rental::create([
    //         'user_id' => auth()->id(),
    //         'city_id' => $validated['city_id'],
    //         'listing_title' => $validated['listing_title'],
    //         'description' => $validated['description'],
    //         'purchase_price' => $validated['purchase_price'],
    //         'property_type' => $validated['property_type'],
    //         'security_deposit' => $validated['security_deposit'],
    //         'lease_length' => $validated['lease_length'],
    //         'bedrooms' => $validated['bedrooms'],
    //         'bathrooms' => $validated['bathrooms'],
    //         'square_feet' => $validated['square_feet'],
    //         'pet_friendly' => $petFriendly,
    //         'parking_garage' => $validated['parking_garage'],
    //         'primary_image_url' => $primaryImageUrl,
    //         'status' => ActiveInactive::INACTIVE->value,
    //         'sort_order' => 0,
    //     ]);

    //     // Handle gallery images if you have a separate table for them
    //     if ($request->hasFile('gallery_images')) {
    //         foreach ($request->file('gallery_images') as $image) {
    //             $galleryUrl = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
    //             $image->storeAs('listings/gallery', $galleryUrl);

    //             ListingGallery::create([
    //                 'listing_id' => $rental->id,
    //                 'listing_type' => Rental::class,
    //                 'image_url' => $galleryUrl,
    //             ]);
    //         }
    //     }

    //     return redirect()
    //         ->route('user.listings-rentals')
    //         ->with('success', 'Rental listing submitted successfully and is pending review.');
    // }
    public function storeListing(Request $request)
    {
        $validated = $request->validate([
            'listing_title' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'property_type' => ['required', 'string'],
            'security_deposit' => ['required', 'numeric', 'min:0'],
            'lease_length' => ['required', 'integer', 'min:1'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'pet_friendly' => ['required', 'in:yes,no'],
            'parking_garage' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'], // 10MB max
            'gallery_images.*' => ['nullable', 'image', 'max:51200'], // 50MB max per image
        ]);

        $this->rentalService->createRental($validated, $request);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'Rental listing submitted successfully and is pending review.');
    }

    public function storeLinkListing(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'external_link' => ['required', 'url', 'max:1000'],
        ]);

        $this->rentalService->submitExternalRental($validated);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'External rental listing link submitted successfully.');
    }


    /**
     * Show the form for editing the specified rental listing
     */
    public function editListing($id): Response
    {
        $rental = Rental::where('user_id', auth()->id())
            ->findOrFail($id);

        $cities = City::all(['id', 'name']);

        return Inertia::render('user/listings-rentals/edit-listing-rental', [
            'rental' => $rental,
            'cities' => $cities,
            'propertyTypes' => collect(RentalProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
        ]);
    }

    public function updateListing(Request $request, $id)
    {
        $rental = Rental::where('user_id', auth()->id())->findOrFail($id);

        $validated = $request->validate([
            'listing_title' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'property_type' => ['required', 'string'],
            'security_deposit' => ['required', 'numeric', 'min:0'],
            'lease_length' => ['required', 'integer', 'min:1'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'pet_friendly' => ['required', 'in:yes,no'],
            'parking_garage' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'], // 10MB max
            'gallery_images.*' => ['nullable', 'image', 'max:51200'], // 50MB max per image
        ]);

        $this->rentalService->updateRental($rental, $validated, $request);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'Rental listing updated successfully.');
    }


    /**
     * Delete the specified rental listing
     */
    public function deleteListing($id)
    {
        $rental = Rental::where('user_id', auth()->id())->findOrFail($id);

        $this->rentalService->deleteRental($rental);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'Rental listing deleted successfully.');
    }
}
