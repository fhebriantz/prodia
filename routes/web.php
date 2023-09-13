<?php
use App\Http\Controllers\ProjectReviewController;
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
Route::get('/', [ProjectReviewController::class, 'index'])->name('project-review');
Route::post('/prodia/generate', [ProjectReviewController::class, 'generate'])->name('prodia-generate');
Route::post('/prodia/render/{job}', [ProjectReviewController::class, 'render'])->name('prodia-render');
Route::post('/prodia/insert', [ProjectReviewController::class, 'insert'])->name('prodia-insert');
Route::get('/prodia/getImage', [ProjectReviewController::class, 'getImage'])->name('prodia-getImage');

require __DIR__ . '/auth.php';
