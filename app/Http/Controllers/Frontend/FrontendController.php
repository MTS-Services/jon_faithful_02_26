<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    //

    public function index (): Response 
    {
        
         return Inertia::render('frontend/index');

    }
    public function partnerProgram (): Response 
    {
        
         return Inertia::render('frontend/partnerProgram');

    }
    public function livingInBristol (): Response 
    {
        
         return Inertia::render('frontend/livingInBristol');

    }

    public function livingInChattanooga (): Response 
    {
        
         return Inertia::render('frontend/livingInChattanooga');

    }
}
