<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Valutazione extends Model
{
    public $table = 'valutazione';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'voto', 'utente', 'ricetta'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}