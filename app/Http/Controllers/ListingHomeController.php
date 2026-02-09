<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ListingHomeController extends Controller
{
    public function listings(): Response
    {
        $lisging = Listing::where('user_id', auth()->user()->id)->with('city')->paginate(10);
        return Inertia::render('user/listings-homes/listings', [
            'listings' => $lisging
        ]);
    }
    public function addListing(): Response
    {
        return Inertia::render('user/listings-homes/add-listing-home');
    }
    public function addListingStore(Request $request): Response
    {
        return Inertia::render('user/listings-homes/add-listing-home');
    }
    public function editListing(): Response
    {
        return Inertia::render('user/listings-homes/edit-listing-home');
    }
    public function deleteListing(): Response
    {
        return Inertia::render('user/listings-homes/delete-listing-home');
    }
}
