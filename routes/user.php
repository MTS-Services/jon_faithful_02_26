<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ListingHomeController;
use App\Http\Controllers\ListingRentalController;
use App\Http\Controllers\User\UserAuthController;

Route::get('/login', [LoginController::class, 'showLogin'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.post');
Route::get('/register', [UserAuthController::class, 'register'])->name('register');
Route::post('/register', [UserAuthController::class, 'registerStore'])->name('register.post');
Route::prefix('account')->name('user.')->group(function () {
    Route::get('/choose-user', [UserAuthController::class, 'userChoose'])->name('choose');
    // Authentication Routes...
    Route::get('/pending-verification', [UserController::class, 'accountPending'])->name('pending-verification');
    Route::middleware(['auth'])->controller(UserController::class)->group(function () {
        // Route::get('/dashboard', 'index')->name('dashboard');
        Route::post('/logout', [UserAuthController::class, 'logout'])->name('logout');

        Route::get('/account-settings', 'accountSettings')->name('account-settings');
        Route::post('/account-settings', 'accountSettingsUpdate')->name('account-settings.update');
        Route::get('/licence-verification-status', 'licenceVerificationStatus')->name('licence-verification-status');
    });
    Route::middleware(['auth'])->controller(ListingHomeController::class)->group(function () {
        Route::get('/listings-homes', 'listings')->name('dashboard');
        Route::get('/add-listing-home', 'addListing')->name('add-listing-home');
        Route::post('/store-listing-home', 'addListingStore')->name('store-listing-home');
        Route::post('/add-listing-home', 'addListingLinkStore')->name('add-listing-link-store');
        Route::get('/edit-listing-home/{id}', 'editListing')->name('edit-listing-home');
        Route::put('/edit-listing-home/{id}', 'updateListing')->name('update-listing-home');
        Route::get('/delete-listing-home', 'deleteListing')->name('delete-listing-home');
    });
    Route::middleware(['auth'])->controller(ListingRentalController::class)->group(function () {
        Route::get('/listings-rentals', 'listings')->name('listings-rentals');
        Route::get('/add-listing-rental', 'addListing')->name('add-listing-rental');
        Route::post('/store-listing-rental', 'storeListing')->name('store-listing-rental');
        Route::get('/edit-listing-rental/{id}', 'editListing')->name('edit-listing-rental');
        Route::put('/edit-listing-rental/{id}', 'updateListing')->name('update-listing-rental');
        Route::get('/delete-listing-rental/{id}', 'deleteListing')->name('delete-listing-rental');
    });
});
