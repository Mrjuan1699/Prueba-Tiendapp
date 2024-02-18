<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{

    // Consulta a la base de datos para obtener los productos y sus marcas asociadas.
    public function products(Request $request)
    {
        $products = DB::table('products')
            ->join('brands', 'products.brand', '=', 'brands.reference')
            ->get();

        // Devuelve los resultados en formato json como respuesta http.
        return response()->json($products);
    }
}
