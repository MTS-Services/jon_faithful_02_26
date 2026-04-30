<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Support\Facades\Route;

Route::post('/analytics/event', [AnalyticsController::class, 'store'])
    ->middleware('throttle:60,1');

Route::get('/analytics/summary', [AnalyticsController::class, 'summary'])
    ->middleware(['auth', 'throttle:30,1']);
