<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Banktanah1Controller extends Controller
{
    public function index()
    {
        $limit = 10;
        $users = DB::select('select * from users limit ?', [$limit]);
        return Inertia::render('Banktanah1', [
            'title' => "Banktanah1",
            'description' => "Ini deskripsi halaman",
            'data' => $users
        ]);
    }
}
