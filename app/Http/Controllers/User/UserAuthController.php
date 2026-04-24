<?php

namespace App\Http\Controllers\User;

use App\Concerns\PasswordValidationRules;
use App\Enums\ActiveInactive;
use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Mail\FoundingAdminRegistrationMail;
use App\Mail\FoundingPartnerRegistrationMail;
use App\Mail\UserPasswordResetOtpMail;
use App\Models\City;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class UserAuthController extends Controller
{
    use PasswordValidationRules;

    public function userChoose(): Response
    {
        return Inertia::render('frontend/user-choose', [
            'user_type' => collect(UserType::cases())->map(fn ($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
        ]);
    }

    public function register(): Response
    {
        return Inertia::render('auth/register', [
            'cities' => City::orderBy('name')->get(['id', 'name']),
            'formDefaults' => [
                'username' => (string) old('username', ''),
                'name' => (string) old('name', ''),
                'email' => (string) old('email', ''),
                'phone' => (string) old('phone', ''),
                'city_id' => old('city_id') !== null ? (string) old('city_id') : '',
                'license_number' => (string) old('license_number', ''),
                'brokerage_name' => (string) old('brokerage_name', ''),
                'your_self' => (string) old('your_self', ''),
                'type' => old('type', request()->query('type')),
            ],
        ]);
    }

    public function registerStore(Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:20'],
            'city_id' => ['required', 'exists:cities,id'],
            'your_self' => ['nullable', 'string', 'max:255'],
            'brokerage_name' => ['nullable', 'string', 'max:255'],
            'license_number' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:2048'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        // File upload logic
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $imageName = time().'_'.uniqid().'.'.$file->getClientOriginalExtension();
            $file->storeAs('user_images', $imageName);
        }
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'username' => $request['username'],
            'phone' => $request['phone'],
            'city_id' => $request['city_id'],
            'user_type' => $request['type'],
            'your_self' => $request['your_self'],
            'brokerage_name' => $request['brokerage_name'],
            'license_number' => $request['license_number'],
            'image' => isset($imageName) ? $imageName : null,
            'status' => ActiveInactive::INACTIVE->value,
            'password' => Hash::make($request['password']),
        ]);
        if (! $user) {
            return redirect()->back()->withErrors(['error' => 'Failed to register user.'])->withInput();
        }
        if ($user->email) {
            Mail::to($user->email)->send(new FoundingPartnerRegistrationMail($user));
        }
        Mail::to(config('mail.from.address'))->queue((new FoundingAdminRegistrationMail($user))->delay(now()->addSeconds(60)));
        Auth::login($user);

        return redirect()->route('user.pending-verification');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('frontend.home');
    }

    public function forgotPassword()
    {
        return Inertia::render('auth/forgot-password');
    }

    public function forgotPasswordStore(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
        ], [
            'email.exists' => 'No account found with this email address.',
        ]);
        $otp = str_pad(random_int(100000, 999999), 6, '0', STR_PAD_LEFT);

        $request->session()->put('password_reset', [
            'otp' => $otp,
            'email' => $request->email,
            'expires_at' => now()->addMinutes(10)->timestamp,
            'verified' => false,
        ]);
        $data = [
            'email' => $request->email,
            'otp' => $otp,
        ];
        Mail::to($request->email)->send(new UserPasswordResetOtpMail($data));

        return redirect()->route('otp-verification');
    }

    public function otpVerification()
    {
        if (! session()->has('password_reset')) {
            return redirect()->route('forgot-password');
        }

        return Inertia::render('auth/otp-verification');
    }

    public function otpVerificationStore(Request $request)
    {
        $request->validate([
            'otp' => ['required', 'numeric', 'digits:6'],
        ]);

        $resetData = session()->get('password_reset');

        if (! $resetData) {
            return redirect()->route('forgot-password')
                ->withErrors(['email' => 'Session expired. Please start over.']);
        }

        if ($resetData['otp'] != $request->otp) {
            return redirect()->route('otp-verification')
                ->withErrors(['otp' => 'Invalid OTP. Please try again.']);
        }

        if ($resetData['expires_at'] < now()->timestamp) {
            return redirect()->route('otp-verification')
                ->withErrors(['otp' => 'Session expired. Please start over.']);
        }

        $resetData['verified'] = true;
        session()->put('password_reset', $resetData);

        return redirect()->route('reset-password');
    }

    public function resetPassword()
    {
        if (! session()->has('password_reset')) {
            return redirect()->route('forgot-password');
        }

        return Inertia::render('auth/reset-password');
    }

    public function resetPasswordStore(Request $request)
    {
        $request->validate([
            'password' => $this->passwordRules(),
            'password_confirmation' => ['required', 'same:password'],
        ]);

        $resetData = $request->session()->get('password_reset');

        if (! $resetData || ! $resetData['verified']) {
            return redirect()->route('forgot-password')
                ->withErrors(['email' => 'Session expired. Please start over.']);
        }

        $user = User::where('email', $resetData['email'])->first();

        if (! $user) {
            return redirect()->route('forgot-password')
                ->withErrors(['email' => 'User not found.']);
        }

        $user->update(['password' => Hash::make($request->password)]);

        $request->session()->forget('password_reset');

        return redirect()->route('login')
            ->with('status', 'Your password has been reset successfully. Please log in.');
    }
}
