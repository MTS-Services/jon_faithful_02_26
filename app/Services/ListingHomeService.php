<?php

namespace App\Services;

use App\Models\Listing;
use App\Models\ListingGallery;
use App\Models\ExternalListingSubmission;
use App\Enums\ActiveInactive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\FoundingExternalSubmitionMail;
use Illuminate\Support\Facades\DB;

class ListingHomeService
{
    /**
     * =======================================
     * Create Listing
     * =======================================
     */
    public function createListing(array $validated, Request $request): Listing
    {
        return DB::transaction(function () use ($validated, $request) {

            // Handle Primary Image
            $primaryImage = $this->handlePrimaryImage($request);

            $listing = Listing::create([
                'user_id'          => $validated['user_id'] ?? auth()->id(),
                'city_id'          => $validated['city_id'],
                'title'            => $validated['title'],
                'description'      => $validated['description'],
                'purchase_price'   => $validated['purchase_price'],
                'listing_status'   => $validated['listing_status'],
                'property_type'    => $validated['property_type'],
                'bedrooms'         => $validated['bedrooms'],
                'bathrooms'        => $validated['bathrooms'],
                'square_feet'      => $validated['square_feet'],
                'primary_image_url' => $primaryImage,
                'youtube_video_url' => $validated['youtube_video_url'],
                'status'           => $validated['status'] ?? ActiveInactive::INACTIVE->value,
                'sort_order'       => 0,
            ]);

            $this->handleGalleryImages($request, $listing);

            return $listing;
        });
    }

    /**
     * =======================================
     * Update Listing
     * =======================================
     */
    public function updateListing(Listing $listing, array $validated, Request $request): Listing
    {
        return DB::transaction(function () use ($listing, $validated, $request) {
            // Primary Image Update
            if ($request->hasFile('primary_image_url')) {

                $this->deletePrimaryImage($listing);

                $validated['primary_image_url'] = $this->storeImage(
                    $request->file('primary_image_url'),
                    'listings/primary'
                );
            } else {
                $validated['primary_image_url'] = $listing->primary_image_url;
            }

            $listing->update($validated);

            // Gallery Update
            if ($request->hasFile('gallery_images')) {
                $this->deleteGalleryImages($listing);
                $this->handleGalleryImages($request, $listing);
            }

            return $listing;
        });
    }

    /**
     * =======================================
     * External Listing Submission
     * =======================================
     */
    public function submitExternalListing(array $validated): ExternalListingSubmission
    {
        $submission = ExternalListingSubmission::create([
            'user_id'      => auth()->id(),
            'name'         => $validated['name'],
            'email'        => $validated['email'],
            'external_link' => $validated['external_link'],
        ]);

        Mail::to(config('mail.from.address'))
            ->send(new FoundingExternalSubmitionMail($submission));

        return $submission;
    }

    /**
     * =======================================
     * PRIVATE HELPERS
     * =======================================
     */

    private function handlePrimaryImage(Request $request): ?string
    {
        if (!$request->hasFile('primary_image_url')) {
            return null;
        }

        return $this->storeImage(
            $request->file('primary_image_url'),
            'listings/primary'
        );
    }

    private function handleGalleryImages(Request $request, Listing $listing): void
    {
        if (!$request->hasFile('gallery_images')) {
            return;
        }

        foreach ($request->file('gallery_images') as $image) {

            $imageName = $this->storeImage($image, 'listings/gallery');

            ListingGallery::create([
                'listing_id'   => $listing->id,
                'listing_type' => Listing::class,
                'image_url'    => $imageName,
            ]);
        }
    }

    private function storeImage($file, string $path): string
    {
        $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
        $file->storeAs($path, $imageName, 'public');

        return $imageName;
    }

    private function deletePrimaryImage(Listing $listing): void
    {
        if (
            $listing->primary_image_url &&
            Storage::disk('public')->exists('listings/primary/' . $listing->primary_image_url)
        ) {
            Storage::disk('public')
                ->delete('listings/primary/' . $listing->primary_image_url);
        }
    }

    private function deleteGalleryImages(Listing $listing): void
    {
        $galleries = ListingGallery::where('listing_id', $listing->id)
            ->where('listing_type', Listing::class)
            ->get();

        foreach ($galleries as $gallery) {
            if (
                $gallery->image_url &&
                Storage::disk('public')->exists('listings/gallery/' . $gallery->image_url)
            ) {
                Storage::disk('public')
                    ->delete('listings/gallery/' . $gallery->image_url);
            }
        }

        ListingGallery::where('listing_id', $listing->id)
            ->where('listing_type', Listing::class)
            ->delete();
    }
}
