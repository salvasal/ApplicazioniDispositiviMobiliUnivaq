<?php

namespace App\Http\Controllers;

use App\Ingrediente;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class IngredienteController extends Controller
{

    public function showAllIngredienti()
    {
        return response()->json(Ingrediente::all());
    }

    public function showOneIngrediente($id)
    {
        return response()->json(Ingrediente::find($id));
    }

    public function create(Request $request)
    {
        $ingrediente = Ingrediente::create($request->all());

        return response()->json($ingrediente, 201);
    }

    public function update($id, Request $request)
    {
        $ingrediente = Ingrediente::findOrFail($id);
        $ingrediente->update($request->all());

        return response()->json($ingrediente, 200);
    }

    public function delete($id)
    {
        Ingrediente::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}