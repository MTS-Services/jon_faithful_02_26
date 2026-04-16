<?php

namespace App\Http\Middleware;

use App\Models\SeoPage;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Laravel\Fortify\Features;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $routeName = $request->route()?->getName();
        $seoPage = $routeName ? SeoPage::where('route_name', $routeName)->first() : null;

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
                'admin' => $request->user('admin'),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'features' => [
                // 'canRegister' => Features::enabled(Features::registration()),
                // 'canResetPassword' => Features::enabled(Features::resetPasswords()),
                // 'canVerifyEmail' => Features::enabled(Features::emailVerification()),
                // 'canUseTwoFactorAuthentication' => Features::enabled(Features::twoFactorAuthentication()),
                'canRegister' => false,
                'canResetPassword' => false,
                'canVerifyEmail' => false,
                'canUseTwoFactorAuthentication' => false,
            ],
            'seo' => [
                'route_name' => $routeName,
                'title' => $seoPage?->meta_title,
                'description' => $seoPage?->meta_description,
                'keywords' => $seoPage?->meta_keywords,
                'canonical_url' => $request->url(),
            ],
        ];
    }
}
