@extends('themes.index')

@section('content')
    <div class="container border mt-5  text-center py-5 border mt-2">

        @if (isset($product))
            <h1>Editar producto</h1>
        @else
            <h1>Crear producto</h1>
        @endif

        <div name="form" class="container mt-5">
            @if (isset($product))
                <form action="{{ route('product.update', $product) }}" class="form-inline" method="post">
                    @method('PUT')
                @else
                    <form action="{{ route('product.store') }}" class="form-inline" method="post">
            @endif

            <!-- Token -->
            @csrf
            <div class="row mb-4">
                <div class="col-md-4">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="product">Producto</label>
                        <input type="text" name="product" class="form-control"
                            value="{{ old('product') ?? @$product->product }}"
                            placeholder="Ingrese el nombre del producto" />
                        @error('product')
                            <p class="text-danger fw-bold form-text">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="size">Talla</label>

                    <select class="form-select" value="{{ old('size') ?? @$product->size }}" name="size"
                        aria-label="Default select example">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    @error('size')
                        <p class="text-danger fw-bold form-text">{{ $message }}</p>
                    @enderror
                </div>
                <div class="col-md-4">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="comments">Observaciones</label>
                        @if (isset($product))
                        <textarea class="form-control" name="comments" rows="1" placeholder="Ingrese las observaciones del producto">{{ $product->comments }}</textarea>
                        @else
                        <textarea class="form-control" name="comments" rows="1" placeholder="Ingrese las observaciones del producto"></textarea>
                        @endif
                        @error('comments')
                            <p class="text-danger fw-bold form-text">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-4">
                    <label class="form-label" for="brand">Marca</label>

                    <select class="form-select" value="{{ old('brand') ?? @$product->brand_reference }}" name="brand"
                        aria-label="Default select example">
                        @forelse ($brands as $brand)
                            <option value="{{ $brand->reference }}">{{ $brand->brand }}</option>
                        @empty
                        @endforelse

                    </select>
                    @error('brand')
                        <p class="text-danger fw-bold form-text">{{ $message }}</p>
                    @enderror
                </div>
                <div class="col-md-4">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="inventory">Inventario</label>
                        <input type="number" name="inventory" class="form-control"
                            value="{{ old('inventory') ?? @$product->inventory }}"
                            placeholder="Ingrese la cantidad de inventario" />
                        @error('inventory')
                            <p class="text-danger fw-bold form-text">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="col-md-4">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="shipment_date">Fecha de embarque</label>
                        <input type="date" name="shipment_date"
                            value="{{ old('shipment_date') ?? @$product->shipment_date }}" class="form-control" />
                        <!-- Mensaje de error si no cumple la validación -->
                        @error('shipment_date')
                            <p class="text-danger fw-bold form-text">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
            </div>



            @if (isset($product))
                <button type="submit" class="btn btn-success mt-5">Editar producto</button>
            @else
                <button type="submit" class="btn btn-success mt-5">Crear producto</button>
            @endif

            </form>
        </div>
    </div>
@endsection
