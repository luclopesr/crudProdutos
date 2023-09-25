<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;

class ProdutoController extends Controller
{
    public function getProduto() {
        return response()->json(Produto::all(), 200);
    }

    public function getProdutoById($id) {
        $produto = Produto::find($id);
        if (is_null($produto)) {
            return response()->json(['mensagem' => 'Produto não encontrado'], 404);
        }

        return response()->json($produto::find($id), 200);
    }

    public function addProduto(Request $request) {
        $produto = Produto::create($request->all());
        return response($produto, 201);
    }

    public function updateProduto(Request $request, $id) {
        $produto = Produto::find($id);
        if (is_null($produto)) {
            return response()->json(['mensagem' => 'Produto não encontrado'], 404);
        }

        $produto->update($request->all());
        return response($produto, 200);
    }

    public function deleteProduto(Request $request, $id) {
        $produto = Produto::find($id);
        if (is_null($produto)) {
            return response()->json(['mensagem' => 'Produto não encontrado'], 404);
        }

        $produto->delete();
        return response()->json(null, 204);
    }
}
