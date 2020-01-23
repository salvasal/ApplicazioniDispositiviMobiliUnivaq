<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValutazioneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valutazione', function (Blueprint $table) {
            $table->increments('idvalutazione');
            $table->integer('voto');
            $table->integer('utente')->unsigned();
            $table->integer('ricetta')->unsigned();
            $table->timestamps();
        });
        Schema::table('valutazione', function($table) {
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
        Schema::dropIfExists('valutazione');
    }
}
