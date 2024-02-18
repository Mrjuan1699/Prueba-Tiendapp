<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    public $timestamps = false;

    //Definir el nombre de la columna que actúa como clave primaria en la tabla de la base de datos.
    protected $primaryKey = 'reference';

    //Define los atributos del modelo que se pueden asignar de forma masiva.
    protected $fillable = ['reference', 'brand'];
}
