<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PenggunaanController extends Controller
{
    public function index()
    {
        $limit = 10;
        $users = DB::select('select * from users limit ?', [$limit]);
        return Inertia::render('Penggunaan', [
            'title' => "Penggunaan",
            'description' => "Ini deskripsi halaman",
            'data' => $users
        ]);
    }


    public function detail($id)
    {
        return Inertia::render('PenggunaanDetail', [
            'title' => "PenggunaanDetail",
            'description' => "Ini deskripsi halaman",
            'id' => $id
        ]);
    }
}
