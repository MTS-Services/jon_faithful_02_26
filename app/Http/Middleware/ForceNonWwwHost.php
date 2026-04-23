<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceNonWwwHost
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! app()->isProduction()) {
            return $next($request);
        }

        $host = $request->getHost();

        if (str_starts_with($host, 'www.')) {
            $nonWwwHost = substr($host, 4);

            return redirect()->to(
                $request->getScheme() . '://' . $nonWwwHost . $request->getRequestUri(),
                301
            );
        }

        return $next($request);
    }
}