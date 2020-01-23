<?php

namespace App\Http\Controllers;

use App\Pubblicazione;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PubblicazioneController extends Controller
{

    public function showAllPubblicazioni()
    {
        return response()->json(Pubblicazione::all());
    }

    public function showOnePubblicazione($id)
    {
        return response()->json(Pubblicazione::find($id));
    }

    public function create(Request $request)
    {
        $pubblicazione = Pubblicazione::create($request->all());

        return response()->json($pubblicazione, 201);
    }

    public function update($id, Request $request)
    {
        $pubblicazione = Pubblicazione::findOrFail($id);
        $pubblicazione->update($request->all());

        return response()->json($pubblicazione, 200);
    }

    public function delete($id)
    {
        Pubblicazione::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}