<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\DriverManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
    });

    Route::middleware('admin')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
        Route::get('/drivers', [DriverManagementController::class, 'index'])->name('drivers.index');
        Route::post('/drivers', [DriverManagementController::class, 'store'])->name('drivers.store');
        Route::put('/drivers/{driver}', [DriverManagementController::class, 'update'])->name('drivers.update');
        Route::post('/drivers/{driver}/approve', [DriverManagementController::class, 'approve'])->name('drivers.approve');
        Route::delete('/drivers/{driver}', [DriverManagementController::class, 'destroy'])->name('drivers.destroy');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
    });
});