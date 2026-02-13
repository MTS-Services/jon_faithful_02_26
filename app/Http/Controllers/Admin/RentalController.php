<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Facility;
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

    public function details(Rental $rental): Response
    {
        $rental->load(['galleries', 'facilities']);


        return Inertia::render('admin/rentals/view', [
            'rental' => $rental
        ]);
    }


    public function create(): Response
    {
        $cities = City::all();
        $users = User::all();
        $facilities = Facility::all();

        // Get enum values as key => label
        $propertyTypes = collect(RentalProperty::cases())
            ->mapWithKeys(fn($type) => [$type->value => $type->label()]);
        $status = collect(ActiveInactive::cases())
            ->mapWithKeys(fn($status) => [$status->value => $status->label()]);

        return Inertia::render('admin/rentals/create', [
            'cities' => $cities,
            'propertyTypes' => $propertyTypes,
            'users' => $users,
            'status' => $status,
            'facilities' => $facilities
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
            'primary_image_url' => 'nullable|file|image|max:5120', // 5MB max
            'gallery_images.*' => 'nullable|file|image|max:5120',
            'status' => 'required|string',
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
            'youtube_video_url' => ['nullable', 'url'],
        ]);

        // Use RentalService to create the rental
        $rental = $this->rentalService->createRental($request->all(), $request, $validated);

        // Using sync ensures the pivot table is updated correctly
        if ($request->has('facilities')) {
            $rental->facilities()->sync($request->input('facilities', []));
        }

        // Redirect back to the rentals index or wherever you want
        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental created successfully!');
    }

    public function edit($id)
    {
        $rental = Rental::with('facilities')->findOrFail($id);
        $cities = City::all();
        $users = User::all();
        $facilities = Facility::all();
        $propertyTypes = collect(RentalProperty::cases())
            ->mapWithKeys(fn($type) => [$type->value => $type->label()]);
        $status = collect(ActiveInactive::cases())
            ->mapWithKeys(fn($status) => [$status->value => $status->label()]);

        return Inertia::render('admin/rentals/edit', [
            'rental' => $rental,
            'cities' => $cities,
            'users' => $users,
            'propertyTypes' => $propertyTypes,
            'status' => $status,
            'facilities' => $facilities
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'user_id'          => 'required|exists:users,id',
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
            'primary_image_url' => 'nullable|file|image|max:5120',
            'gallery_images.*' => 'nullable|file|image|max:5120',
            'status' => 'required|string',
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
            'youtube_video_url' => ['nullable', 'url'],
        ]);


        $rental = Rental::findOrFail($id);

        $rentalUpdated = $this->rentalService->updateRental($rental, $validated, $request);

        if ($request->has('facilities')) {
            $rentalUpdated->facilities()->sync($request->input('facilities', []));
        }

        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental updated successfully!');
    }


    public function delete($id)
    {
        $rental = Rental::findOrFail($id);
        $this->rentalService->deleteRental($rental);
        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental deleted successfully!');
    }
}
