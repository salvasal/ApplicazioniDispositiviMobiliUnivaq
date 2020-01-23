<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pubblicazione extends Model
{
    public $table = 'pubblicazione';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'utente', 'ricetta'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}