<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
        Route::get('/register', [AdminAuthController::class, 'register'])->name('register');
    });

    Route::middleware('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
        Route::get('/all', [AdminController::class, 'allAdmin'])->name('all');
        Route::get('/view/detail/{id}', [AdminController::class, 'viewAdmin'])->name('view.detail');
        Route::get('/view/edit/{id}', [AdminController::class, 'editAdmin'])->name('edit');
        Route::post('/update', [AdminController::class, 'updateAdmin'])->name('update');
        Route::post('/delete/{id}', [AdminController::class, 'deleteAdmin'])->name('delete');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');

        Route::group(['prefix' => 'users', 'as' => 'um.'], function () {
            Route::get('/users', [UserController::class, 'index'])->name('users.index');
            Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
            Route::post('/user/store', [UserController::class, 'store'])->name('user.store');
            Route::get('/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
            Route::put('/user/{id}', [UserController::class, 'update'])->name('user.update');
            Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('user.destroy');
        });
    });
});
