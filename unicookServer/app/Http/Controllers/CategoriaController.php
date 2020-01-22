<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoriaController extends Controller
{

    public function showAllCategorie()
    {
        return response()->json(Categoria::all());
    }

    public function showOneCategoria($id)
    {
        return response()->json(Categoria::find($id));
    }

    public function create(Request $request)
    {
        $categoria = Categoria::create($request->all());

        return response()->json($categoria, 201);
    }

    public function update($id, Request $request)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());

        return response()->json($categoria, 200);
    }

    public function delete($id)
    {
        Categoria::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}