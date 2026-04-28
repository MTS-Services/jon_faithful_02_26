<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Dark mode script --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KLNSK7NCGF"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-KLNSK7NCGF');
    </script>

    @verbatim
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WHY TENNESSEE",
      "url": "https://whytennessee.com/",
      "email": "info@whytennessee.com",
      "description": "WhyTennessee.com is your all-in-one guide to living, moving and buying a home in Tennessee.",
      "areaServed": "United States",
      "sameAs": [
        "https://www.facebook.com/61585187906493/"
      ]
    }
    </script>
    @endverbatim

    {{-- Theme background --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }
        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>@yield('title', config('app.name', 'Why Tennessee'))</title>

    <meta name="description"
          content="@yield('meta_description', 'Why Tennessee – Your complete guide to living, moving, and buying homes in Tennessee.')">

    <link rel="canonical" href="{{ request()->url() }}">

    <link rel="icon" href="/assets/logo/why-tennessee-logo.png" type="image/png">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
