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
  });
