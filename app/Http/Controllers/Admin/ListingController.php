<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ListingController extends Controller
{
    public function listingsHome(): Response
    {
        return Inertia::render('admin/listings/homes');
    }
    public function listingsRental(): Response
    {
        return Inertia::render('admin/listings/rentals');
    }
}
