<?php

namespace App\Http\Controllers;

use App\Valutazione;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ValutazioneController extends Controller
{

    public function showAllValutazioni()
    {
        return response()->json(Valutazione::all());
    }

    public function showOneValutazione($id)
    {
        return response()->json(Valutazione::find($id));
    }

    public function create(Request $request)
    {
        $valutazione = Valutazione::create($request->all());

        return response()->json($valutazione, 201);
    }

    public function update($id, Request $request)
    {
        $valutazione = Valutazione::findOrFail($id);
        $valutazione->update($request->all());

        return response()->json($valutazione, 200);
    }

    public function delete($id)
    {
        Valutazione::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}