<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreferitoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preferito', function (Blueprint $table) {
            $table->increments('idPreferito');
            $table->string('data');
            $table->integer('utente')->unsigned();
            $table->integer('ricetta')->unsigned();
            $table->timestamps();
        });
        Schema::table('preferito', function($table) {
            $table->foreign('utente')->references('id')->on('utente');
            $table->foreign('ricetta')->references('idRicetta')->on('ricetta');
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preferito');
    }
}
