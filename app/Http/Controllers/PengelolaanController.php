<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PengelolaanController extends Controller
{

    public function index()
    {
        try {
            $year = date("Y");
            $token = md5(date("dmY"));
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/pengelolaan', [
                'token' => $token,
                'year' => $year,
            ]);
            $data = $response->json();
            return Inertia::render('Pengelolaan', [
                'title' => "Pengelolaan",
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
            $response = Http::post('http://202.146.130.233/dashboard/services/segment/pengelolaan', [
                'token' => $token,
                'year' => ($year == 'all' ? '' : $year),
            ]);
            $data = $response->json();
            return Inertia::render('Pengelolaan', [
                'title' => "Pengelolaan",
                'data' => $data,
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
        return Inertia::render('PengelolaanDetail', [
            'title' => "PengelolaanDetail",
            'description' => "Ini deskripsi halaman",
            'id' => $id
        ]);
    }
}
