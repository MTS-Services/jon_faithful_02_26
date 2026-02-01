<?php

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('user')->name('user.')->group(function () {
    Route::middleware(['auth'])->controller(UserController::class)->group(function () {
        Route::get('/dashboard', 'index')->name('index');
    });
});
