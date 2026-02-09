<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Enums\ListingProperty;

class ListingRentalController extends Controller
{
    public function listings(): Response
    {
        $rentals = Rental::where('user_id', auth()->user()->id)->with('city')->paginate(10);
        return Inertia::render('user/listings-rentals/listings', [
            'rentals' => $rentals
        ]);
    }

    public function addListing(): Response
    {
        return Inertia::render('user/listings-rentals/add-listing-rental');
    }
    public function storeListing(): Response
    {
        $cities = City::all(['id', 'name']);

        return Inertia::render('user/listings-homes/add-listing-home', [
            'cities' => $cities,
            'propertyTypes' => collect(ListingProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
        ]);
    }
    public function editListing(): Response
    {
        return Inertia::render('user/listings-rentals/edit-listing-rental');
    }
    public function updateListing()
    {
        // 
    }
    public function deleteListing(): Response
    {
        return Inertia::render('user/listings-rentals/delete-listing-rental');
    }
}
