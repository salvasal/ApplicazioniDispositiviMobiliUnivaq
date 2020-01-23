<?php

namespace App\Http\Controllers;

use App\Preferito;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PreferitoController extends Controller
{

    public function showAllPreferiti()
    {
        return response()->json(Preferito::all());
    }

    public function showOnePreferito($id)
    {
        return response()->json(Preferito::find($id));
    }

    public function create(Request $request)
    {
        $preferito = Preferito::create($request->all());

        return response()->json($preferito, 201);
    }

    public function update($id, Request $request)
    {
        $preferito = Preferito::findOrFail($id);
        $preferito->update($request->all());

        return response()->json($preferito, 200);
    }

    public function delete($id)
    {
        Preferito::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}