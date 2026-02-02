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

    });
