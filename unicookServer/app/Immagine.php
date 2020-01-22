<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Immagine extends Model
{
    public $table = 'immagine';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'imageFrame'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}