<?php

namespace App\Http\Controllers;

use App\Utente;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UtenteController extends Controller
{

    public function showAllUtenti()
    {
        return response()->json(Utente::all());
    }

    public function showOneUtente($id)
    {
        return response()->json(Utente::find($id));
    }

    public function create(Request $request)
    {
        $utente = Utente::create($request->all());

        return response()->json($utente, 201);
    }

    public function update($id, Request $request)
    {
        $utente = Utente::findOrFail($id);
        $utente->update($request->all());

        return response()->json($utente, 200);
    }

    public function delete($id)
    {
        Utente::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}