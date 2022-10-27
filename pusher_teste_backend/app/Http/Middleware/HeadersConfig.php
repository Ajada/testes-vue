<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HeadersConfig
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        // $response->header('Content-Type', 'application/json');
        // $response->header('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3dvbGZ0ZWNoLXBhaW5lbC53b2xmdGVjaHRpLmNvbS5ici9hcGkvdjEvbG9naW4iLCJpYXQiOjE2NjY4NzUxMDEsImV4cCI6MTY2Njg3ODcwMSwibmJmIjoxNjY2ODc1MTAxLCJqdGkiOiJhT29sYU94SUtONzhUN2VXIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.yFrPmfOx6txNTAtu5zqq2B9SfSLzPgnM7Jke8JR855M');

        return $response;
    }
}
