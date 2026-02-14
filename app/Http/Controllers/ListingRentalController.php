<?php

namespace App\Http\Controllers;

use App\Enums\ActiveInactive;
use App\Models\City;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Enums\RentalProperty;
use App\Models\Facility;
use App\Services\RentalService;
use Illuminate\Validation\Rules\Enum;

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
    public function listings(Request $request): Response
    {
        $rentals = Rental::with('city')
            ->where('user_id', $request->user()->id)
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
        $facilities = Facility::all();

        return Inertia::render('user/listings-rentals/add-listing-rental', [
            'cities' => $cities,
            'facilities' => $facilities,
            'propertyTypes' => collect(RentalProperty::cases())
                ->map(fn($type) => [
                    'value' => $type->value,
                    'label' => $type->label(),
                ])
                ->values()
                ->toArray(),
        ]);
    }
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
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'gallery_images.*' => ['nullable', 'image', 'max:51200'],
            'youtube_video_url' => ['nullable', 'url'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['integer', 'exists:facilities,id'],
        ]);

        $validated['status'] = ActiveInactive::ACTIVE->value;

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
    public function editListing(Request $request, $id): Response
    {
        $rental = Rental::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $cities = City::all(['id', 'name']);

        return Inertia::render('user/listings-rentals/edit-listing-rental', [
            'rental' => $rental,
            'cities' => $cities,
            'propertyTypes' => collect(RentalProperty::cases())
                ->map(fn($type) => [
                    'value' => $type->value,
                    'label' => $type->label(),
                ])
                ->values()
                ->toArray(),
        ]);
    }

    public function updateListing(Request $request, $id)
    {
        $rental = Rental::where('user_id', $request->user()->id)->findOrFail($id);

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
            'status' => ['required', new Enum(ActiveInactive::class)],
            'youtube_video_url' => ['nullable', 'url'],
        ]);

        $validated['status'] = ActiveInactive::ACTIVE->value;
        $this->rentalService->updateRental($rental, $validated, $request);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'Rental listing updated successfully.');
    }


    /**
     * Delete the specified rental listing
     */
    public function deleteListing(Request $request, $id)
    {
        $rental = Rental::where('user_id', $request->user()->id)->findOrFail($id);

        $this->rentalService->deleteRental($rental);

        return redirect()
            ->route('user.listings-rentals')
            ->with('success', 'Rental listing deleted successfully.');
    }
}
