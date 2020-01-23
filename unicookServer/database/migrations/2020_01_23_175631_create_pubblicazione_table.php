<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePubblicazioneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pubblicazione', function (Blueprint $table) {
            $table->increments('idpubblicazione');
            $table->string('data');
            $table->string('ora');
            $table->integer('utente')->unsigned();
            $table->integer('ricetta')->unsigned();
            $table->timestamps();
        });
        Schema::table('pubblicazione', function($table) {
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
        Schema::dropIfExists('pubblicazione');
    }
}
