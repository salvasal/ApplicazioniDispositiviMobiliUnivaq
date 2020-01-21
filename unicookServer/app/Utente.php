<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Utente extends Model
{
    public $table = 'utente';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'password', 'chiaveRecupero', 'nome', 'cognome', 'sesso', 'dataNascita'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}