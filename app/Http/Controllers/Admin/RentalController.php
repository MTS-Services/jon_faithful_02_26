<?php

namespace App\Http\Controllers\Admin;

use App\Enums\RentalProperty;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\User;
use App\Services\RentalService;

class RentalController extends Controller
{
    public function __construct(
        protected DataTableService $dataTableService, 
        protected RentalService $rentalService
    ) {}


    public function index(): Response
    {
        $queryBody = Rental::query();
        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['title',],
            'sortable' => ['id', 'title', 'created_at'],
        ]);
        return Inertia::render('admin/rentals/index', [
            'rentals' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }
    public function details($id): Response
    {
        $rental = Rental::findOrFail($id)->load('galleries');
        return Inertia::render('admin/rentals/view', [
            'rental' => $rental
        ]);
    }


public function create(): Response
{
    $cities = City::all();
    $users = User::all();

    // Get enum values as key => label
    $propertyTypes = collect(RentalProperty::cases())
        ->mapWithKeys(fn($type) => [$type->value => $type->label()]);

    return Inertia::render('admin/rentals/create', [
        'cities' => $cities,
        'propertyTypes' => $propertyTypes,
        'users' => $users
    ]);
}

public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'listing_title'    => 'required|string|max:255',
            'description'      => 'required|string',
            'purchase_price'   => 'required|numeric',
            'property_type'    => 'required|string',
            'security_deposit' => 'nullable|numeric',
            'lease_length'     => 'nullable|string',
            'bedrooms'         => 'nullable|numeric',
            'bathrooms'        => 'nullable|numeric',
            'square_feet'      => 'nullable|numeric',
            'pet_friendly'     => 'nullable|string',
            'parking_garage'   => 'nullable|string',
            'city_id'          => 'required|exists:cities,id',
            'primary_image_url'=> 'nullable|file|image|max:5120', // 5MB max
            'gallery_images.*' => 'nullable|file|image|max:5120',
        ]);

        // Use RentalService to create the rental
        $rental = $this->rentalService->createRental($request->all(), $request, $validated);

        // Redirect back to the rentals index or wherever you want
        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental created successfully!');
    }


    
}
