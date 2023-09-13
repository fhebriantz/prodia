<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PendistribusianController extends Controller
{
    public function index()
    {
        try {
            $year = date("Y");
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/pemanfaatan', [
                'token' => $token,
                'year' => $year,
            ]);
            $data = $response->json();
            return Inertia::render('Pendistribusian', [
                'title' => "Pendistribusian",
                'data' => $data,
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
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/pemanfaatan', [
                'token' => $token,
                'year' => ($year == 'all' ? '' : $year),
            ]);
            $data = $response->json();
            return Inertia::render('Pendistribusian', [
                'title' => "Pendistribusian",
                'data' => $data,
                'year' => $year,
                'url' => config('app.url')
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function detail()
    {
        return Inertia::render('PendistribusianDetail', [
            'title' => "PendistribusianDetail",
            'description' => "Ini deskripsi halaman"
        ]);
    }
}
