<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceWwwHost
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! app()->isProduction()) {
            return $next($request);
        }

        $host = $request->getHost();

        if (
            $host !== '' &&
            $host !== 'localhost' &&
            ! str_starts_with($host, 'www.')
        ) {
            return redirect()->to(
                $request->getScheme() . '://www.' . $host . $request->getRequestUri(),
                301
            );
        }

        return $next($request);
    }
}
