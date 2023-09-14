<?php

use App\Http\Controllers\ContinuousImageController;
use App\Http\Controllers\ImageToImageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [ImageToImageController::class, 'index'])->name('imgtoimg');

Route::get('/imgtoimg', [ImageToImageController::class, 'index'])->name('imgtoimg');
Route::post('/prodia/generate', [ImageToImageController::class, 'generate'])->name('prodia-generate');
Route::post('/prodia/render/{job}', [ImageToImageController::class, 'render'])->name('prodia-render');
Route::post('/prodia/insert', [ImageToImageController::class, 'insert'])->name('prodia-insert');
Route::get('/prodia/getImage', [ImageToImageController::class, 'getImage'])->name('prodia-getImage');
Route::get('prodia/truncate', [ImageToImageController::class, 'truncate'])->name('prodia-truncate');


Route::get('/continuousimage', [ContinuousImageController::class, 'index'])->name('continuousimage');
Route::post('ci/generate', [ContinuousImageController::class, 'generate'])->name('ci-generate');
Route::post('ci/render/{job}', [ContinuousImageController::class, 'render'])->name('ci-render');
Route::post('ci/insert', [ContinuousImageController::class, 'insert'])->name('ci-insert');
Route::get('ci/getImage', [ContinuousImageController::class, 'getImage'])->name('ci-getImage');
Route::get('ci/truncate', [ContinuousImageController::class, 'truncate'])->name('ci-truncate');

Route::get('/videotoimage', [ImageToImageController::class, 'index'])->name('videotoimage');

require __DIR__ . '/auth.php';
