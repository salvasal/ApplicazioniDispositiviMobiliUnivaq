<?php

namespace App\Http\Controllers;

use App\Immagine;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImmagineController extends Controller
{

    public function showAllImmagini()
    {
        return response()->json(Immagine::all());
    }

    public function showOneImmagine($id)
    {
        return response()->json(Immagine::find($id));
    }

    public function create(Request $request)
    {
        $immagine = Immagine::create($request->all());

        return response()->json($immagine, 201);
    }

    public function update($id, Request $request)
    {
        $immagine = Immagine::findOrFail($id);
        $immagine->update($request->all());

        return response()->json($immagine, 200);
    }

    public function delete($id)
    {
        Immagine::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}