<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        //5 filas para crear una nueva paginación
        $brands = Brand::paginate(5);
        return view('brand.index')
            ->with('brands', $brands);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('brand.form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Validación
        $request->validate([
            'brand' => 'required|max:50',
            'reference' => ['required', 'unique:brands,reference', 'max:65']
        ]);

        //Asignación masiva, asignar multiples valores a la vez (en este caso solo reference y brand)
        $brand = Brand::create($request->only('reference', 'brand'));

        //Crear variable de sesión para el msj informativo
        Session::flash('mensaje', 'Marca creada correctamente.');

        return redirect()->route('brand.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        return view('brand.form')
            ->with('brand', $brand);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        //Solo se edita el nombre de la marca (tambien se puede editar la referencia, lo dejo comentado)
        $request->validate([
            'brand' => 'required|max:50',
            //'reference' => ['required', 'unique:brands,reference', 'max:65']
        ]);

        //$brand->reference = $request['reference'];
        $brand->brand = $request['brand'];
        $brand->save();

        //Crear variable de sesión para el msj informativo
        Session::flash('mensaje', 'Marca editada correctamente.');

        return redirect()->route('brand.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();

        Session::flash('mensaje', 'Marca eliminada correctamente.');

        return redirect()->route('brand.index');
    }
}
