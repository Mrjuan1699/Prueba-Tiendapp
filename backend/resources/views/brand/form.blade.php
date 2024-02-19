@extends('themes.index')

@section('content')
    <div class="container border mt-5 w-25 text-center py-5 border mt-2">

        <!-- Si existe la variable $brand, se muestra el titulo "Editar marca" -->
        @if (isset($brand))
            <h1>Editar marca</h1>
        @else
            <h1>Crear marca</h1>
        @endif

        <div name="form" class="container  mt-5">
            <!-- Si existe la variable $brand, el method de form cambia a PUT -->
            @if (isset($brand))
                <form action="{{ route('brand.update', $brand) }}" method="post">
                    @method('PUT')
                @else
                    <form action="{{ route('brand.store') }}" method="post">
            @endif

            <!-- Token -->
            @csrf

            <div class="text-center">
                <label for="reference" class="form-label">Referencia de la marca</label>
                <!-- Si existe la variable $brand, el campo referencia se le agrega la propiedad disabled(no se puede editar como se menciona en el controlador) -->
                @if (isset($brand))
                    <input disabled type="text" name="reference" class="form-control"
                        placeholder="Ingrese la referencia de la marca"
                        value="{{ old('reference') ?? @$brand->reference }}">
                @else
                    <input type="text" name="reference" class="form-control"
                        placeholder="Ingrese la referencia de la marca"
                        value="{{ old('reference') ?? @$brand->reference }}">
                @endif

                <!-- Mensaje de error si no cumple la validación -->
                @error('reference')
                    <p class="text-danger fw-bold form-text">{{ $message }}</p>
                @enderror
            </div>

            <div class="text-center mt-5">
                <label for="brand" class="form-label">Nombre de la marca</label>
                <input type="text" name="brand" class="form-control" placeholder="Ingrese el nombre de la marca"
                    value="{{ old('brand') ?? @$brand->brand }}">
                @error('brand')
                    <p class="text-danger fw-bold form-text">{{ $message }}</p>
                @enderror
            </div>
            
            @if (isset($brand))
                <button type="submit" class="btn btn-success mt-5">Editar marca</button>
            @else
                <button type="submit" class="btn btn-success mt-5">Crear marca</button>
            @endif

            </form>
        </div>
    </div>
@endsection
