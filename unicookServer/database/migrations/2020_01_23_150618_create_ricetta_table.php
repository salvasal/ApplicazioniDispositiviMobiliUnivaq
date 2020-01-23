<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRicettaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ricetta', function (Blueprint $table) {
            $table->increments('idRicetta');
            $table->string('nomericetta');
            $table->string('descrizione');
            $table->text('preparazione');
            $table->string('tempocottura');
            $table->string('difficolta');
            $table->integer('categoria')->unsigned();
            $table->integer('ingredienti')->unsigned();
            $table->integer('immagini')->unsigned();
            $table->timestamps();
        });
        Schema::table('ricetta', function($table) {
            $table->foreign('categoria')->references('idCategoria')->on('categoria');
            $table->foreign('ingredienti')->references('idIngrediente')->on('ingrediente');
            $table->foreign('immagini')->references('idImmagine')->on('immagine');
        });    
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ricetta');
    }
}
