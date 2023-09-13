<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ProjectReviewController extends Controller
{
    public function index()
    {
        
        try {
            return Inertia::render('ProjectReview', [
                'title' => "ProjectReview",
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
        DB::table('listimage')->insert(
            ['image' => $request['image']]
        );
        $table = 'listimage';
        $column = 'created_at';
        $records = DB::select("SELECT * FROM $table ORDER BY $column DESC");
        return $records;
    }

    public function getImage(){
        $table = 'listimage';
        $column = 'created_at';
        $records = DB::select("SELECT * FROM $table ORDER BY $column DESC");
        return $records;
    }
}
