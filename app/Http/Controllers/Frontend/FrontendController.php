<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
     //

     public function index(): Response
     {
          return Inertia::render('frontend/index');
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
          return Inertia::render('frontend/livingInChattanooga');
     }

     public function homesForSale(): Response
     {
          return Inertia::render('frontend/homes-for-sale');
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
}
