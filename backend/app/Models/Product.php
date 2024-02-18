<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    //Deshabilito las marcas de tiempo de creación y actualización.
    public $timestamps = false;

    //Define los atributos del modelo que se pueden asignar de forma masiva.
    protected $fillable = ['product','size','comments','brand','inventory','shipment_date'];

}
