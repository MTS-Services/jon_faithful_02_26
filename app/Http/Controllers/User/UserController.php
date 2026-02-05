<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
    //

    public function index(): Response
    {
        return Inertia::render('user/dashboard');
    }
    public function accountSettings(): Response
    {

        return Inertia::render('user/profile/index', [
            'item' => auth()->user(),
        ]);
    }

    public function accountSettingsUpdate(Request $request): RedirectResponse
    {
        try {

            $user = User::findOrFail($request->id);

            $data = $request->except(['password', 'password_confirmation', 'image']);

            if ($request->filled('password')) {
                $data['password'] = bcrypt($request->password);
            }

            $user->update($data);

            return back()->with('success', 'Account settings updated successfully.');
        } catch (\Exception $e) {
            Log::error('User Account Update Error', [
                'message' => $e->getMessage(),
                'line'    => $e->getLine(),
                'file'    => $e->getFile(),
                'user_id' => auth()->id(),
                'request' => $request->all(),
            ]);

            return back()->with('error', 'Something went wrong. Please try again.');
        }
    }
}
