<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\ServiceArea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
    public function index()
    {
        $driver = Auth::guard('web')->user();


        return Inertia::render('user/dashboard');
    }

    public function toggleOnline(Request $request)
    {
        $driver = Auth::guard('driver')->user();
        $driver->update([
            'is_online' => !$driver->is_online,
        ]);

        return back()->with('success', 'Status updated successfully.');
    }

    public function updateProfile(Request $request)
    {
        $driver = Auth::guard('driver')->user();

        $validated = $request->validate([
            'phone_number' => 'required|string|max:20',
            'service_area_id' => 'required|exists:service_areas,id',
        ]);

        $driver->update($validated);

        return back()->with('success', 'Profile updated successfully.');
    }
}
