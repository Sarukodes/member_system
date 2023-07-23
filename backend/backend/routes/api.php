<?php

use Illuminate\Http\Request;
use App\Http\Controllers\memberController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('list',[memberController::class,'list']);
Route::post('add',[memberController::class,'add']);

