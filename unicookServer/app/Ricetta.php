<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ricetta extends Model
{
    public $table = 'ricetta';
    protected $casts = [
        'ingredienti' => 'array',
        'immagini' => 'array'
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nomericetta', 'descrizione', 'preparazione', 'tempocottura', 'difficolta', 'categoria', 'ingredienti', 'immagini'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}