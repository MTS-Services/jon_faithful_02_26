<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CityMortgageSettingController;
use App\Http\Controllers\Admin\ContactUsController;
use App\Http\Controllers\Admin\ExternalLinkSubmiition;
use App\Http\Controllers\Admin\ListingController;
use App\Http\Controllers\Admin\MortgageLeadController;
use App\Http\Controllers\Admin\NewsletterController;
use App\Http\Controllers\Admin\RentalManagement\FeatureCategoryController;
use App\Http\Controllers\Admin\RentalManagement\FeatureController;
use App\Http\Controllers\Admin\RentalManagement\RentalController;
use App\Http\Controllers\Admin\SeoPageController;
use App\Http\Controllers\Admin\UserManagement\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
        Route::get('/register', [AdminAuthController::class, 'register'])->name('register');
        Route::post('/register', [AdminAuthController::class, 'registerStore'])->name('register.post');
    });
    Route::post('/features', [ListingController::class, 'storeFacility'])->name('feature.store');

    Route::middleware('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
        Route::get('/all', [AdminController::class, 'index'])->name('index');
        Route::get('/view/detail/{id}', [AdminController::class, 'viewAdmin'])->name('view.detail');
        Route::get('/create', [AdminController::class, 'createAdmin'])->name('create');
        Route::post('/store', [AdminController::class, 'storeAdmin'])->name('store');
        Route::get('/view/edit/{id}', [AdminController::class, 'editAdmin'])->name('edit');
        Route::post('/update', [AdminController::class, 'updateAdmin'])->name('update');
        Route::get('/delete/{id}', [AdminController::class, 'deleteAdmin'])->name('delete');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');

        Route::group(['prefix' => 'users', 'as' => 'um.'], function () {
            Route::get('/users', [UserController::class, 'index'])->name('users.index');
            Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
            Route::post('/user/store', [UserController::class, 'store'])->name('user.store');
            Route::get('/user/{id}/view', [UserController::class, 'show'])->name('user.view');
            Route::get('/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
            Route::put('/user/{id}', [UserController::class, 'update'])->name('user.update');
            Route::get('/users/{id}', [UserController::class, 'destroy'])->name('user.destroy');
            Route::get('/pending-verification', [UserController::class, 'pendingVerification'])->name('user.pending-verification');
            Route::get('/user/verify/{id}', [UserController::class, 'verified'])->name('user.verify');
            Route::post('/user/license-verify/{id}/{status}', [UserController::class, 'licenseVerify'])->name('user.license-verify');
        });

        Route::prefix('unit-feature-categories')->as('unit-feature-categories.')->controller(FeatureCategoryController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('/', 'store')->name('store');
            Route::put('/{featureCategory}', 'update')->name('update');
            Route::delete('/{featureCategory}', 'destroy')->name('destroy');
        });

        Route::prefix('unit-features')->as('unit-features.')->controller(FeatureController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('/', 'store')->name('store');
            Route::put('/{feature}', 'update')->name('update');
            Route::delete('/{feature}', 'destroy')->name('destroy');
        });
        Route::prefix('listing')->as('listing.')->controller(ListingController::class)->group(function () {
            Route::get('/homes', 'index')->name('index');
            Route::get('/add-listing-home/{user_id?}', 'create')->name('create');
            Route::post('/store-listing-home', 'store')->name('store');
            Route::get('/homes-details/{listing}', 'details')->name('details');
            Route::get('/edit-listing-home/{listing}', 'edit')->name('edit');
            Route::put('/update-listing-home/{listing}', 'update')->name('update');
            Route::get('/activate/{listing}', 'activate')->name('activate');
            Route::get('/inactivate/{listing}', 'inactivate')->name('inactivate');
            Route::get('/delete-listing-home/{listing}', 'delete')->name('delete');
            // Facilities

        });
        Route::prefix('rentals')->as('rentals.')->controller(RentalController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/create/{user_id?}', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::post('/update/{id}', 'update')->name('update');
            Route::get('/details/{rental}', 'details')->name('details');
            Route::get('/activate/{id}', 'activate')->name('activate');
            Route::get('/inactivate/{id}', 'inactivate')->name('inactivate');
            Route::get('/delete/{id}', 'delete')->name('delete');
        });
        Route::get('/external-link', [ExternalLinkSubmiition::class, 'externalLink'])->name('external-link');
        Route::delete('/external-link/{id}', [ExternalLinkSubmiition::class, 'delete'])->name('external-link.delete');

        Route::prefix('contact')->as('contact.')->controller(ContactUsController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            // Route::get('/details/{contact}', 'show')->name('details');
            Route::get('/delete/{contact}', 'delete')->name('delete');
        });

        Route::prefix('newsletter')->as('newsletter.')->controller(NewsletterController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/delete/{newsletter}', 'delete')->name('delete');
        });

        Route::prefix('mortgage-settings')->as('mortgage-settings.')->controller(CityMortgageSettingController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('/', 'store')->name('store');
            Route::put('/{cityMortgageSetting}', 'update')->name('update');
            Route::delete('/{cityMortgageSetting}', 'destroy')->name('destroy');
        });

        Route::prefix('seo-pages')->as('seo-pages.')->controller(SeoPageController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::put('/{seoPage}', 'update')->name('update');
            Route::post('/generate-sitemap', 'generateSitemap')->name('generate-sitemap');
        });

        Route::prefix('mortgage-leads')->as('mortgage-leads.')->controller(MortgageLeadController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/delete/{mortgageLead}', 'delete')->name('delete');
        });
    });
});
