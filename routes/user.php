<?php

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\UserDashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('user')->name('user.')->group(function () {
    Route::middleware('guest:auth')->group(function () {
        Route::get('/login', [UserController::class, 'showLogin'])->name('login');
        Route::post('/login', [UserController::class, 'login'])->name('login.post');
        Route::get('/register', [UserController::class, 'showRegister'])->name('register');
        Route::post('/register', [UserController::class, 'register'])->name('register.post');
    });

    Route::middleware('auth')->group(function () {
        Route::get('/dashboard', [UserDashboardController::class, 'index'])->name('dashboard');
        Route::post('/toggle-online', [UserDashboardController::class, 'toggleOnline'])->name('toggle-online');
        Route::post('/update-profile', [UserDashboardController::class, 'updateProfile'])->name('update-profile');
        Route::post('/logout', [UserController::class, 'logout'])->name('logout');
    });
});