<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserManagementController extends Controller
{
    public function index()
    {
        $limit = 10;
        $token = md5(date("dmY"));
        $users = DB::select('select * from users limit ?', [$limit]);
        return Inertia::render('UserManagement', [
            'title' => "User Management",
            'description' => "Ini deskripsi halaman",
            'data' => $users,
            'token' => $token,
            'url' => config('app.url')
        ]);
    }

    public function getUser()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function update(Request $request)
    { {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'role' => 'required',
                'password' => 'sometimes',
            ]);
            DB::table('users')
                ->where('id', $request['id'])
                ->update(($request->filled('password')) ? [
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'role' => $request['role'],
                    'password' => Hash::make($request['password']),
                ] : [
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'role' => $request['role']
                ]);

            // Auth::login($user);
        }
        $list_user = User::all();
        return response()->json($list_user);
    }

    public function store(Request $request)
    { {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'role' => 'required',
                'password' => 'required',
            ]);

            DB::table('users')
                ->insert([
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'role' => $request['role'],
                    'password' => Hash::make($request['password']),
                ]);

            // Auth::login($user);
        }
        $list_user = User::all();
        return response()->json($list_user);
    }

    public function destroy(Request $request)
    {
        // Find the user with the given ID
        $user = User::findOrFail($request['id']);

        // Delete the user
        $user->delete();

        $list_user = User::all();
        return response()->json($list_user);
    }
}
