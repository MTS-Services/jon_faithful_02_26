<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('user/dashboard');
    }

    public function accountSettings(): Response
    {
        return Inertia::render('user/profile/index', [
            'user' => auth()->user(),
        ]);
    }

    public function accountSettingsUpdate(Request $request): RedirectResponse
    {
        try {
            $user = User::findOrFail($request->id);

            // Validate the request
            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'string', 'max:20'],
                'your_self' => ['nullable', 'string'],
                'brokerage_name' => ['nullable', 'string', 'max:255'],
                'license_number' => ['nullable', 'string', 'max:255'],
                'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:10240'], // 10MB max
                'username' => [
                    'required',
                    'string',
                    'max:255',
                    Rule::unique(User::class)->ignore($user->id),
                ],
                'email' => [
                    'required',
                    'string',
                    'email',
                    'max:255',
                    Rule::unique(User::class)->ignore($user->id),
                ],
                'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            ]);

            $validated = $request->except(['password', 'password_confirmation', 'image']);

            if ($request->filled('password')) {
                $validated['password'] = bcrypt($request->password);
            }

            if ($request->hasFile('image')) {
                if ($user->image && Storage::disk('public')->exists('user_images/' . $user->image)) {
                    Storage::disk('public')->delete('user_images/' . $user->image);
                }

                // Store new image
                $file = $request->file('image');
                $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('user_images', $imageName, 'public');

                $validated['image'] = $imageName;
            }

            // Update user
            $user->update($validated);

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