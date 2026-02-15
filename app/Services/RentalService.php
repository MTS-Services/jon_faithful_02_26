<?php

namespace App\Services;

use App\Models\Rental;
use App\Models\ListingGallery;
use App\Models\ExternalListingSubmission;
use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\FoundingExternalSubmitionMail;
use Illuminate\Pagination\LengthAwarePaginator;

class RentalService
{
    public function __construct(protected Rental $model) {}
    /**
     * ===========================================
     * CREATE RENTAL
     * ===========================================
     */
    public function createRental(array $validated, Request $request): Rental
    {
        return DB::transaction(function () use ($validated, $request) {

            $primaryImage = $this->handlePrimaryImage($request);

            $user_id = $validated['user_id'] ?? auth()->id();


            $rental = Rental::create([
                'user_id'          => $user_id,
                'city_id'          => $validated['city_id'],
                'listing_title'    => $validated['listing_title'],
                'description'      => $validated['description'],
                'purchase_price'   => $validated['purchase_price'],
                'property_type' => $validated['property_type'],
                'security_deposit' => $validated['security_deposit'],
                'lease_length'     => $validated['lease_length'],
                'bedrooms'         => $validated['bedrooms'],
                'bathrooms'        => $validated['bathrooms'],
                'square_feet'      => $validated['square_feet'],
                'pet_friendly'     => $validated['pet_friendly'] === 'yes',
                'parking_garage'   => $validated['parking_garage'],
                'primary_image_url' => $primaryImage,
                'status'           => $validated['status'],
                'sort_order'       => 0,
                'youtube_video_url' => $validated['youtube_video_url'],
            ]);

            $this->handleGalleryImages($request, $rental);

            return $rental;
        });
    }

    /**
     * ===========================================
     * UPDATE RENTAL
     * ===========================================
     */
    public function updateRental(Rental $rental, array $validated, Request $request): Rental
    {
        return DB::transaction(function () use ($rental, $validated, $request) {

            if ($request->hasFile('primary_image_url')) {
                $this->deletePrimaryImage($rental);

                $validated['primary_image_url'] = $this->storeImage(
                    $request->file('primary_image_url'),
                    'rentals/primary'
                );
            }

            $validated['pet_friendly'] = $validated['pet_friendly'] === 'yes';

            $rental->update([
                'city_id'          => $validated['city_id'],
                'listing_title'    => $validated['listing_title'],
                'description'      => $validated['description'],
                'purchase_price'   => $validated['purchase_price'],
                'property_type'    => $validated['property_type'],
                'security_deposit' => $validated['security_deposit'],
                'lease_length'     => $validated['lease_length'],
                'bedrooms'         => $validated['bedrooms'],
                'bathrooms'        => $validated['bathrooms'],
                'square_feet'      => $validated['square_feet'],
                'pet_friendly'     => $validated['pet_friendly'],
                'parking_garage'   => $validated['parking_garage'],
                'primary_image_url' => $validated['primary_image_url'] ?? $rental->primary_image_url,
                'youtube_video_url' => $validated['youtube_video_url'],
                'facilities' => ['nullable', 'array'],
                'facilities.*' => ['integer', 'exists:facilities,id'],
            ]);

            if ($request->hasFile('gallery_images')) {
                $this->deleteGalleryImages($rental);
                $this->handleGalleryImages($request, $rental);
            }

            return $rental;
        });
    }

    /**
     * ===========================================
     * DELETE RENTAL
     * ===========================================
     */
    public function deleteRental(Rental $rental): void
    {
        DB::transaction(function () use ($rental) {

            $this->deletePrimaryImage($rental);
            $this->deleteGalleryImages($rental);

            $rental->delete();
        });
    }

    /**
     * ===========================================
     * EXTERNAL RENTAL LINK SUBMISSION
     * ===========================================
     */
    public function submitExternalRental(array $validated): ExternalListingSubmission
    {
        $submission = ExternalListingSubmission::create([
            'user_id'      => auth()->id(),
            'name'         => $validated['name'],
            'email'        => $validated['email'],
            'external_link' => $validated['external_link'],
        ]);

        Mail::to('info@whytennessee.com')
            ->queue(new FoundingExternalSubmitionMail($submission)); // queued for production

        return $submission;
    }

    /**
     * ===========================================
     * PRIVATE HELPERS
     * ===========================================
     */

    private function handlePrimaryImage(Request $request): ?string
    {
        if (!$request->hasFile('primary_image_url')) {
            return null;
        }

        return $this->storeImage(
            $request->file('primary_image_url'),
            'rentals/primary'
        );
    }

    private function handleGalleryImages(Request $request, Rental $rental): void
    {
        if (!$request->hasFile('gallery_images')) {
            return;
        }

        foreach ($request->file('gallery_images') as $image) {

            $imageName = $this->storeImage($image, 'rentals/gallery');

            ListingGallery::create([
                'listing_id'   => $rental->id,
                'listing_type' => Rental::class,
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

    private function deletePrimaryImage(Rental $rental): void
    {
        if (
            $rental->primary_image_url &&
            Storage::disk('public')->exists('rentals/primary/' . $rental->primary_image_url)
        ) {
            Storage::disk('public')
                ->delete('rentals/primary/' . $rental->primary_image_url);
        }
    }

    private function deleteGalleryImages(Rental $rental): void
    {
        $galleries = ListingGallery::where('listing_id', $rental->id)
            ->where('listing_type', Rental::class)
            ->get();

        foreach ($galleries as $gallery) {
            if (
                $gallery->image_url &&
                Storage::disk('public')->exists('rentals/gallery/' . $gallery->image_url)
            ) {
                Storage::disk('public')
                    ->delete('rentals/gallery/' . $gallery->image_url);
            }
        }

        ListingGallery::where('listing_id', $rental->id)
            ->where('listing_type', Rental::class)
            ->delete();
    }




    // ===================================================
    // Paginated Datas
    // ===================================================
    public function getPaginatedDatas(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->query()->with('city');

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }
        if (!empty($filters['city'])) {
            $cityIds = explode(',', $filters['city']);
            $query->whereIn('city_id', $cityIds);
        }
        if (!empty($filters['price_min'])) {
            $query->where('price', '>=', $filters['price_min']);
        }
        if (!empty($filters['price_max'])) {
            $query->where('price', '<=', $filters['price_max']);
        }
        if (!empty($filters['bedrooms'])) {
            $query->where('bedrooms', $filters['bedrooms']);
        }
        if (!empty($filters['bathrooms'])) {
            $query->where('bathrooms', $filters['bathrooms']);
        }
        if (!empty($filters['square_feet'])) {
            $query->where('square_feet', $filters['square_feet']);
        }
        if (!empty($filters['property_type']) && is_array($filters['property_type'])) {
            $query->whereIn('property_type', $filters['property_type']);
        }

        return $query->paginate($perPage);
    }
}
