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
use Illuminate\Support\Facades\Storage;
use App\Models\ExternalListingSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class ListingHomeController extends Controller
{
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
        Log::info('Listing home store');
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

        // Handle primary image upload
        $primaryImageUrl = null;
        if ($request->hasFile('primary_image_url')) {
            $file = $request->file('primary_image_url');
            $primaryImageUrl = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('listings/primary', $primaryImageUrl);
        }

        // Create the listing
        $listing = Listing::create([
            'user_id' => auth()->id(),
            'city_id' => $validated['city_id'],
            'title' => $validated['title'],
            'description' => $validated['description'],
            'purchase_price' => $validated['purchase_price'],
            'listing_status' => $validated['listing_status'],
            'property_type' => $validated['property_type'],
            'bedrooms' => $validated['bedrooms'],
            'bathrooms' => $validated['bathrooms'],
            'square_feet' => $validated['square_feet'],
            'primary_image_url' => $primaryImageUrl,
            'status' => ActiveInactive::INACTIVE->value,
            'sort_order' => 0,
        ]);

        // Handle gallery images if you have a separate table for them
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $image) {
                $galleryUrl = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('listings/gallery', $galleryUrl);

                ListingGallery::create([
                    'listing_id' => $listing->id,
                    'listing_type' => Listing::class,
                    'image_url' => $galleryUrl,
                ]);
            }
        }

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

        // Store the external listing submission
        // You might want to create a separate table for this
        ExternalListingSubmission::create([
            'user_id' => auth()->id(),
            // 'listing_id' => null,
            // 'listing_type' => Listing::class,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'external_link' => $validated['external_link'],
        ]);

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

    public function updateListing(Request $request, $id): RedirectResponse
    {
        $listing = Listing::where('user_id', auth()->id())
            ->findOrFail($id);

        /**
         * ============================
         * VALIDATION
         * ============================
         */
        $validated = $request->validate([
            'title'            => ['required', 'string', 'max:500'],
            'description'      => ['required', 'string'],
            'purchase_price'   => ['required', 'numeric', 'min:0'],
            'city_id'          => ['required', 'exists:cities,id'],
            'listing_status'   => ['required', 'string'],
            'property_type'    => ['required', 'string'],
            'bedrooms'         => ['required', 'integer', 'min:0'],
            'bathrooms'        => ['required', 'integer', 'min:0'],
            'square_feet'      => ['required', 'integer', 'min:0'],
            'primary_image_url'    => ['nullable', 'image', 'max:10240'],   // 10MB
            'gallery_images'   => ['nullable', 'array'],
            'gallery_images.*' => ['image', 'max:25600'],               // 25MB each
        ]);

        /**
         * ============================
         * PRIMARY IMAGE
         * ============================
         */
        if ($request->hasFile('primary_image_url')) {

            // delete old
            if (
                $listing->primary_image_url &&
                Storage::disk('public')->exists('listings/primary/' . $listing->primary_image_url)
            ) {
                Storage::disk('public')->delete('listings/primary/' . $listing->primary_image_url);
            }

            $file = $request->file('primary_image_url');
            $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('listings/primary', $imageName, 'public');

            $validated['primary_image_url'] = $imageName;
        }

        /**
         * ============================
         * UPDATE LISTING
         * ============================
         */
        $listing->update([
            'city_id'            => $validated['city_id'],
            'title'              => $validated['title'],
            'description'        => $validated['description'],
            'purchase_price'     => $validated['purchase_price'],
            'listing_status'     => $validated['listing_status'],
            'property_type'      => $validated['property_type'],
            'bedrooms'           => $validated['bedrooms'],
            'bathrooms'          => $validated['bathrooms'],
            'square_feet'        => $validated['square_feet'],
            'primary_image_url'  => $validated['primary_image_url'] ?? $listing->primary_image_url,
        ]);

        /**
         * ============================
         * GALLERY IMAGES (FIXED)
         * ============================
         */
        if ($request->hasFile('gallery_images')) {

            // get old gallery
            $oldGallery = ListingGallery::where('listing_id', $listing->id)
                ->where('listing_type', Listing::class)
                ->get();

            // delete old images from storage
            foreach ($oldGallery as $gallery) {
                if (
                    $gallery->image_url &&
                    Storage::disk('public')->exists('listings/gallery/' . $gallery->image_url)
                ) {
                    Storage::disk('public')->delete('listings/gallery/' . $gallery->image_url);
                }
            }

            // delete old records
            ListingGallery::where('listing_id', $listing->id)
                ->where('listing_type', Listing::class)
                ->delete();

            // store new gallery images
            foreach ($request->file('gallery_images') as $image) {
                $galleryUrl = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('listings/gallery', $galleryUrl, 'public');

                ListingGallery::create([
                    'listing_id'   => $listing->id,
                    'listing_type' => Listing::class,
                    'image_url'    => $galleryUrl,
                ]);
            }
        }

        return redirect()
            ->route('user.dashboard')
            ->with('success', 'Listing updated successfully.');
    }

    public function deleteListing(): Response
    {
        return Inertia::render('user/listings-homes/delete-listing-home');
    }
}
