<?php

namespace App\Http\Controllers;

use App\Ricetta;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RicettaController extends Controller
{

    public function showAllRicette()
    {
        return response()->json(Ricetta::all());
    }

    public function showOneRicetta($id)
    {
        return response()->json(Ricetta::find($id));
    }

    public function create(Request $request)
    {
        $ricetta = Ricetta::create($request->all());

        return response()->json($ricetta, 201);
    }

    public function update($id, Request $request)
    {
        $ricetta = Ricetta::findOrFail($id);
        $ricetta->update($request->all());

        return response()->json($ricetta, 200);
    }

    public function delete($id)
    {
        Ricetta::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}