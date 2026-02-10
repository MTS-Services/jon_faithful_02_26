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
        $listings = $this->model->query()
            ->with('city')
            ->paginate($perPage);

        return $listings;
    }

    public function findData($id)
    {
        return $this->model
            ->with(['city', 'user', 'galleries']) 
            ->findOrFail($id);
    }
}
