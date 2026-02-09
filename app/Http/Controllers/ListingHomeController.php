<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ListingHomeController extends Controller
{
    public function listings(): Response
    {
        return Inertia::render('user/listings-homes/listings');
    }
    public function addListing(): Response
    {
        return Inertia::render('user/listings-homes/add-listing-home');
    }
    public function editListing(): Response
    {
        return Inertia::render('user/listings-homes/edit-listing-home');
    }
}
