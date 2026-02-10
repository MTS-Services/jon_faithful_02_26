<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Services\ListingService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
     public function __construct(private ListingService $service) {}

     public function index(): Response
     {
          $listings =  $this->service->getPaginatedDatas(
               perPage: 8,
               // filters: []
          );
          return Inertia::render('frontend/index', ['listings' => $listings]);
     }
     public function partnerProgram(): Response
     {
          return Inertia::render('frontend/partnerProgram');
     }
     public function livingInBristol(): Response
     {
          return Inertia::render('frontend/livingInBristol');
     }
     public function rentingTennessee(): Response
     {
          return Inertia::render('frontend/rentingTennessee');
     }

     public function livingInChattanooga(): Response
     {
          return Inertia::render('frontend/living-in-chattanooga');
     }

     public function homesForSale(Request $request): Response
     {
          $filters = $request->only([
               'search',
               'city',
               'price_min',
               'price_max',
               'bedrooms',
               'bathrooms',
               // 'sqft_min',
               'square_feet',
               'property_type'
          ]);

          $listings = $this->service->getPaginatedDatas(
               perPage: 6,
               filters: $filters
          );

          $cities = City::orderBy('name')->get();

          return Inertia::render('frontend/homes-for-sale', [
               'listings' => $listings,
               'cities' => $cities,
               'filters' => $filters
          ]);
     }
     public function movingChecklist(): Response
     {
          return Inertia::render('frontend/moving-checklist');
     }
     public function rentals(): Response
     {
          return Inertia::render('frontend/rentals');
     }
     public function cityComparison(): Response
     {
          return Inertia::render('frontend/city-comparison');
     }
     public function realEstateAgents(): Response
     {
          return Inertia::render('frontend/real-estate-agents');
     }
     public function whyTennessee(): Response
     {
          return Inertia::render('frontend/why-tennessee');
     }
     public function tennesseeRelocation(): Response
     {
          return Inertia::render('frontend/tennessee-relocation');
     }
     public function singleProduct($id): Response
     {
          $listing = $this->service->findData($id);

          return Inertia::render('frontend/single-product', ['listing' => $listing]);
     }

     public function livetennessee(): Response
     {
          return Inertia::render('frontend/live-tennessee');
     }
     public function rentingBuy(): Response
     {
          return Inertia::render('frontend/renting-buy');
     }
     public function livingInNashville(): Response
     {
          return Inertia::render('frontend/living-in-nashville');
     }
     public function costOfRentingTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-renting-tennessee');
     }
     public function movingTennesseeRenting(): Response
     {
          return Inertia::render('frontend/moving-tennessee-renting');
     }
     public function livingInCookeville(): Response
     {
          return Inertia::render('frontend/living-in-cookeville');
     }
     public function livingInKnoxville(): Response
     {
          return Inertia::render('frontend/living-in-knoxville');
     }
     public function livingInJohnsonCity(): Response
     {
          return Inertia::render('frontend/living-in-johnson-city');
     }
     public function livingInFranklin(): Response
     {
          return Inertia::render('frontend/living-in-franklin');
     }
     public function livingInMemphis(): Response
     {
          return Inertia::render('frontend/living-in-memphis');
     }
     public function livingInClarksville(): Response
     {
          return Inertia::render('frontend/living-in-clarksville');
     }
     public function livingInMurfreesboro(): Response
     {
          return Inertia::render('frontend/living-in-murfreesboro');
     }
     public function livingInKingsport(): Response
     {
          return Inertia::render('frontend/living-in-kingsport');
     }
     public function livingInJackson(): Response
     {
          return Inertia::render('frontend/living-in-jackson');
     }
     public function costOfLivingInTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-living-in-tennessee');
     }
     public function prosConsTennessee(): Response
     {
          return Inertia::render('frontend/pros-cons-tennessee');
     }
}
