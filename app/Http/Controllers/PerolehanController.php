<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PerolehanController extends Controller
{
    public function index()
    {
        try {
            $year = date("Y");
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/perolehan', [
                'token' => $token,
                'year' => $year,
            ]);
            $data = $response->json();
            return Inertia::render('Perolehan', [
                'title' => "Perolehan",
                'perolehanData' => $data,
                'year' => $year,
                'url' => config('app.url')
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
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/perolehan', [
                'token' => $token,
                'year' => ($year == 'all' ? '' : $year),
            ]);
            $data = $response->json();
            return Inertia::render('Perolehan', [
                'title' => "Perolehan",
                'perolehanData' => $data,
                'year' => $year,
                'url' => config('app.url')
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function detail($id)
    {
        try {
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/detail/perolehan', [
                'token' => $token,
                'perolehan_id' => $id,
            ]);
            $data = $response->json();
            return Inertia::render('PerolehanDetail', [
                'title' => "PerolehanDetail",
                'perolehanData' => $data,
                'id' => $id
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
