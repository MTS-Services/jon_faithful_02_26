<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
       
    });

    Route::middleware('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
        Route::get('/all', [AdminController::class, 'allAdmin'])->name('all');
        Route::get('/view/detail/{id}', [AdminController::class, 'viewAdmin'])->name('view.detail');
        Route::get('/view/edit/{id}', [AdminController::class, 'editAdmin'])->name('edit');
        Route::post('/update', [AdminController::class, 'updateAdmin'])->name('update');
        Route::post('/delete/{id}', [AdminController::class, 'deleteAdmin'])->name('delete');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
    });

   
});