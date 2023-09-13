<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PemanfaatanController extends Controller
{
    public function index()
    {
        $limit = 10;
        $users = DB::select('select * from users limit ?', [$limit]);
        return Inertia::render('Pemanfaatan', [
            'title' => "Pemanfaatan",
            'description' => "Ini deskripsi halaman",
            'data' => $users
        ]);
    }


    public function detail($id)
    {
        return Inertia::render('PemanfaatanDetail', [
            'title' => "PemanfaatanDetail",
            'description' => "Ini deskripsi halaman",
            'id' => $id
        ]);
    }
}
