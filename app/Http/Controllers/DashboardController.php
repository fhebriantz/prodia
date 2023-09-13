<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            $year = date("Y");
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/general', [
                'token' => $token,
                'year' => $year,
            ]);
            $data = $response->json();
            return Inertia::render('Dashboard', [
                'title' => "Dashboard",
                'data' => $data,
                'year' => $year,
                'url' => config('app.url'),
                'token' => $token
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function includeYear($year)
    {
        try {
            $year = $year;
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/general', [
                'token' => $token,
                'year' => ($year == 'all' ? '' : $year),
            ]);
            $data = $response->json();
            return Inertia::render('Dashboard', [
                'title' => "Dashboard",
                'data' => $data,
                'year' => $year,
                'url' => config('app.url')
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
