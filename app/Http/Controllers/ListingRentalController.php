<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ListingRentalController extends Controller
{
    public function listings(): Response
    {
        return Inertia::render('user/listings-rentals/listings');
    }

    public function addListing(): Response
    {
        return Inertia::render('user/listings-rentals/add-listing-rental');
    }

    public function editListing(): Response
    {
        return Inertia::render('user/listings-rentals/edit-listing-rental');
    }
}
