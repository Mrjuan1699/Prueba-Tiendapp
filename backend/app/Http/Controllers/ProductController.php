<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\Brand;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //5 filas para crear una nueva paginación
        $products = Product::paginate(5);
        return view('product.index')
            ->with('products', $products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //Obtiene todas las marcas desde la base de datos
        $brands = Brand::all();
        
        // Retorna el formulario de crear productos, pasando las marcas como datos
        return view('product.form')->with('brands', $brands);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product' => 'required|max:50',
            'size' => 'required|max:5',
            'comments' => 'required|max:100',
            'brand' => 'required|max:50',
            'inventory' => 'required|max:20',
            'shipment_date' => 'required|max:50'
        ]);

        $product = Product::create($request->only('product', 'size', 'comments', 'size', 'comments', 'brand', 'inventory', 'shipment_date'));

        Session::flash('mensaje', 'Producto creado correctamente.');

        return redirect()->route('product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $brands = Brand::all();
        return view('product.form')
            ->with('product', $product)->with('brands', $brands);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'product' => 'required|max:50',
            'size' => 'required|max:5',
            'comments' => 'required|max:100',
            'brand' => 'required|max:50',
            'inventory' => 'required|max:20',
            'shipment_date' => 'required|max:50'
        ]);

        $product->product = $request['product'];
        $product->size = $request['size'];
        $product->comments = $request['comments'];
        $product->brand = $request['brand'];
        $product->inventory = $request['inventory'];
        $product->shipment_date = $request['shipment_date'];
        $product->save();

        Session::flash('mensaje', 'Producto editado correctamente.');

        return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        Session::flash('mensaje', 'producto eliminado correctamente.');

        return redirect()->route('product.index');
    }
}
