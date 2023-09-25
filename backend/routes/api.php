<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Lista todos os produtos
Route::get('produtos', [ProdutoController::class, 'getProduto']);

// Lista um produto específico
Route::get('produtos/{id}', [ProdutoController::class, 'getProdutoById']);

// Adiciona um produto
Route::post('addProduto', [ProdutoController::class, 'addProduto']);

// Atualiza um produto
Route::put('updateProduto/{id}', [ProdutoController::class, 'updateProduto']);

// Deleta um produto
Route::delete('deleteProduto/{id}', [ProdutoController::class, 'deleteProduto']);