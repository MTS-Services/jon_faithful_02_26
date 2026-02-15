<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;


Route::name('frontend.')->controller(FrontendController::class)->group(function () {

    Route::get('/', 'index')->name('home');
    Route::get('/partner-program', 'partnerProgram')->name('partnerProgram');
    Route::get('/bristol', 'livingInBristol')->name('livingInBristol');
    Route::get('/renting-tennessee', 'rentingTennessee')->name('rentingTennessee');
    Route::get('/chattanooga', 'livingInChattanooga')->name('livingInChattanooga');
    Route::get('/homes-for-sale', 'homesForSale')->name('home-for-sale');
    Route::get('/moving-checklist', 'movingChecklist')->name('movingChecklist');
    Route::get('/city-comparison', 'cityComparison')->name('city-comparison');
    Route::get('/real-estate-agents', 'realEstateAgents')->name('realEstateAgents');
    Route::get('/rentals', 'rentals')->name('rentals');
    Route::get('/why-tennessee', 'whyTennessee')->name('why-tennessee');
    Route::get('/tennessee-relocation', 'tennesseeRelocation')->name('tennessee-relocation');
    Route::get('/single-product/{id}', 'singleProduct')->name('single-product');
    Route::get('/live-tennessee', 'livetennessee')->name('livetennessee');
    Route::get('/renting-buy', 'rentingBuy')->name('renting-buy');
    Route::get('/living-in-nashville', 'livingInNashville')->name('livingInNashville');
    Route::get('/cost-of-renting-tennessee', 'costOfRentingTennessee')->name('cost-of-renting-tennessee');
    Route::get('/moving-tennessee-renting', 'movingTennesseeRenting')->name('moving-tennessee-renting');
    Route::get('/living-in-nashville', 'livingInNashville')->name('livingInNashville');
    Route::get('/living-in-cookeville', 'livingInCookeville')->name('livingInCookeville');
    Route::get('/living-in-knoxville', 'livingInKnoxville')->name('livingInKnoxville');
    Route::get('/living-in-johnson-city', 'livingInJohnsonCity')->name('livingInJohnsonCity');
    Route::get('/living-in-franklin', 'livingInFranklin')->name('livingInFranklin');
    Route::get('/living-in-memphis', 'livingInMemphis')->name('livingInmeMphis');
    Route::get('/living-in-clarksville', 'livingInClarksville')->name('livingInClarksville');
    Route::get('/living-in-murfreesboro', 'livingInMurfreesboro')->name('livingInMurfreesboro');
    Route::get('/living-in-kingsport', 'livingInKingsport')->name('livingInKingsport');
    Route::get('/living-in-jackson', 'livingInJackson')->name('livingInJackson');
    Route::get('/cost-of-living-in-tennessee', 'costOfLivingInTennessee')->name('cost-of-living-in-tennessee');
    Route::get('/pros-cons-living-in-tennessee', 'prosConsTennessee')->name('pros-cons-tennessee');
    Route::get('/user-details/{id}', 'userDetails')->name('user-details');
    Route::post('/submit-request', 'submitRequest')->name('submit-request');
    Route::post('/user-contact', 'userContact')->name('user-contact');
    Route::get('get-in-touch', 'getInTouch')->name('get-in-touch');
    Route::post('/contact-submit', 'submitGetInTouch')->name('contact.submit');

});
