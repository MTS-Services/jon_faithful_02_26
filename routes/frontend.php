<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;


Route::name('frontend.')->controller(FrontendController::class)->group(function () {

        Route::get('/', 'index')->name('home');
        Route::get('/partner-program', 'partnerProgram')->name('partnerProgram');
        Route::get('/bristol', 'livingInBristol')->name('livingInBristol');
        Route::get('/renting-tennessee', 'rentingTennessee')->name('rentingTennessee');
        Route::get('/chattanooga', 'livingInChattanooga')->name('livingInChattanooga');
        Route::get('/homes-for-sale', 'homesForSale')->name('homesForSale');
        Route::get('/moving-checklist', 'movingChecklist')->name('movingChecklist');
        Route::get('/city-comparison', 'cityComparison')->name('cityComparison');
        Route::get('/real-estate-agents', 'realEstateAgents')->name('realEstateAgents');
        Route::get('/rentals', 'rentals')->name('rentals');
        Route::get('/why-tennessee', 'whyTennessee')->name('why-tennessee');
        Route::get('/tennessee-relocation', 'tennesseeRelocation')->name('tennessee-relocation');
        Route::get('/single-product', 'singleProduct')->name('single-product');
        Route::get('/living-in-nashville', 'livingInNashville')->name('livingInNashville');
        Route::get('/living-in-nashville', 'livingInNashville')->name('livingInNashville');
        Route::get('/living-in-cookeville', 'livingInCookeville')->name('livingInCookeville');

    });
