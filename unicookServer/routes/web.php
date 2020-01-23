<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/v1'], function () use ($router) {
    //API per l'utente

    $router->get('utenti',  ['uses' => 'UtenteController@showAllUtenti']);
  
    $router->get('utenti/{id}', ['uses' => 'UtenteController@showOneUtente']);
  
    $router->post('utenti', ['uses' => 'UtenteController@create']);
  
    $router->delete('utenti/{id}', ['uses' => 'UtenteController@delete']);
  
    $router->put('utenti/{id}', ['uses' => 'UtenteController@update']);

    //API per la Categoria

    $router->get('categorie',  ['uses' => 'CategoriaController@showAllCategorie']);
  
    $router->get('categorie/{id}', ['uses' => 'CategoriaController@showOneCategoria']);
  
    $router->post('categorie', ['uses' => 'CategoriaController@create']);
  
    $router->delete('categorie/{id}', ['uses' => 'CategoriaController@delete']);
  
    $router->put('categorie/{id}', ['uses' => 'CategoriaController@update']);

    //API per l'Immagine

    $router->get('immagini',  ['uses' => 'ImmagineController@showAllImmagini']);
  
    $router->get('immagini/{id}', ['uses' => 'ImmagineController@showOneImmagine']);
  
    $router->post('immagini', ['uses' => 'ImmagineController@create']);
  
    $router->delete('immagini/{id}', ['uses' => 'ImmagineController@delete']);
  
    $router->put('immagini/{id}', ['uses' => 'ImmagineController@update']);

    //API per l'Ingrediente

    $router->get('ingredienti',  ['uses' => 'IngredienteController@showAllIngredienti']);
  
    $router->get('ingredienti/{id}', ['uses' => 'IngredienteController@showOneIngrediente']);
  
    $router->post('ingredienti', ['uses' => 'IngredienteController@create']);
  
    $router->delete('ingredienti/{id}', ['uses' => 'IngredienteController@delete']);
  
    $router->put('ingredienti/{id}', ['uses' => 'IngredienteController@update']);

    //API per la ricetta

    $router->get('ricette',  ['uses' => 'RicettaController@showAllRicette']);
  
    $router->get('ricette/{id}', ['uses' => 'RicettaController@showOneRicetta']);
  
    $router->post('ricette', ['uses' => 'RicettaController@create']);
  
    $router->delete('ricette/{id}', ['uses' => 'RicettaController@delete']);
  
    $router->put('ricette/{id}', ['uses' => 'RicettaController@update']);

    //API per preferito

    $router->get('me/preferiti',  ['uses' => 'PreferitoController@showAllPreferiti']);
  
    $router->get('me/preferiti/{id}', ['uses' => 'PreferitoController@showOnePreferito']);
  
    $router->post('me/preferiti', ['uses' => 'PreferitoController@create']);
  
    $router->delete('me/preferiti/{id}', ['uses' => 'PreferitoController@delete']);
  
    $router->put('me/preferiti/{id}', ['uses' => 'PreferitoController@update']);
  });
