<?php

namespace App\Services;

use App\Models\Listing;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;


class ListingService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Listing $model) {}

    public function getAllDatas()
    {
        return $this->model->with('city')->get();
    }

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

    public function findData($id)
    {
        return $this->model
            ->with(['city', 'user', 'galleries', 'facilities'])
            ->findOrFail($id);
    }
}
