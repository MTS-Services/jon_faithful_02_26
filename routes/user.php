<?php

use App\Http\Controllers\User\UserAuthController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('user')->name('user.')->group(function () {
    Route::get('/choose-user', [UserAuthController::class, 'userChoose'])->name('choose');
    Route::middleware(['auth'])->controller(UserController::class)->group(function () {
        Route::get('/dashboard', 'index')->name('dashboard');
         Route::post('/logout', [UserAuthController::class, 'logout'])->name('logout');

         Route::get('/account-settings', 'accountSettings')->name('account-settings');
         Route::post('/account-settings', 'accountSettingsUpdate')->name('account-settings.update');
    });
});
