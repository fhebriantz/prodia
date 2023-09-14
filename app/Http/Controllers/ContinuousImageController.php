<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ContinuousImageController extends Controller
{
    public function index()
    {
        
        try {
            return Inertia::render('ContinuousImage', [
                'title' => "ContinuousImage",
                'url' => config('app.url')
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function generate(Request $request)
    {
        $client = new Client();
        try {
            $response = $client->request('POST', 'https://api.prodia.com/v1/sd/transform', [
                'body' => $request['body'],
                'headers' => [
                  'X-Prodia-Key' => 'ae337a18-427c-4035-a73b-a89b97a14b6c',
                  'accept' => 'application/json',
                  'content-type' => 'application/json',
                ],
              ]);
            $data = json_decode($response->getBody(), true);
            return $data;
        } catch (\Exception $e) {
            // Handle any errors that occur
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function render($job){
        $client = new Client();
        
        $response = $client->request('GET', "https://api.prodia.com/v1/job/$job", [
            'headers' => [
              'X-Prodia-Key' => 'ae337a18-427c-4035-a73b-a89b97a14b6c',
              'accept' => 'application/json',
            ],
          ]);
        $result = $response->getBody();
        
         return $result;
    }

    public function insert(Request $request){
        DB::table('continuous')->insert(
            ['image' => $request['image']]
        );
        $table = 'continuous';
        $column = 'created_at';
        $records = DB::select("SELECT * FROM $table ORDER BY $column DESC");
        return $records;
    }

    public function truncate(){
        $table = 'continuous';
        $column = 'created_at';
        DB::table($table)->truncate();
        $records = DB::select("SELECT * FROM $table ORDER BY $column DESC");
        return $records;
    }

    public function getImage(){
        $table = 'continuous';
        $column = 'created_at';
        $records = DB::select("SELECT * FROM $table ORDER BY $column DESC");
        return $records;
    }
}
