<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Inertia\Response;
use App\Enums\UserType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{
    public function userChoose(): Response
{
    return Inertia::render('frontend/user-choose', [
        'user_type' => collect(UserType::cases())->map(fn($type) => [
            'value' => $type->value,
            'label' => $type->label(),
        ]),
    ]);
}
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('frontend.home');
    }
}
