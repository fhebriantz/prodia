<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BiayaController extends Controller
{
    public function index()
    {
        $limit = 10;
        $users = DB::select('select * from users limit ?', [$limit]);
        return Inertia::render('Biaya', [
            'title' => "Biaya",
            'description' => "Ini deskripsi halaman",
            'data' => $users
        ]);
    }


    public function detail($id)
    {
        return Inertia::render('BiayaDetail', [
            'title' => "BiayaDetail",
            'description' => "Ini deskripsi halaman",
            'id' => $id
        ]);
    }
}
