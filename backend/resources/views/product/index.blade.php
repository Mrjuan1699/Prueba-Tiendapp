@extends('themes.index')

@section('content')
    <div class="container text-center border mt-5 py-5 w-75">
        <h1>Listado de productos</h1>
        <div class="mt-4 ml-5">
            <a href="{{ route('product.create') }}" class="btn btn-success">Crear producto</a>
        </div>
        <!-- Si existe la variable de sesión mensaje muestra el msj -->
        @if (Session::has('mensaje'))
            <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                <strong>{{ Session::get('mensaje') }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <div class="table-responsive mt-4">
            <table class="table  table-bordered table-hover table-borderless align-middle">
                <thead class="table ">
                    <tr>
                        <th class="bg-secondary">Producto</th>
                        <th class="bg-secondary">Talla </th>
                        <th class="bg-secondary">Observaciones</th>
                        <th class="bg-secondary">Marca</th>
                        <th class="bg-secondary">Inventario</th>
                        <th class="bg-secondary">Fecha de embarque</th>
                        <th class="bg-secondary">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <!-- Bucle -->
                    @forelse ($products as $product)
                        <tr>
                            <td>{{ $product->product }}</td>
                            <td>{{ $product->size }}</td>
                            <td>{{ $product->comments }}</td>
                            <td>{{ $product->brand }}</td>
                            <td>{{ $product->inventory }}</td>
                            <td>{{ $product->shipment_date }}</td>
                            <td>
                                <a href="{{ route('product.edit', $product->id) }}" class="btn btn-warning">Editar</a>
                                <form action="{{ route('product.destroy', $product) }}" method="post" class="d-inline">
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" onclick="return confirm('¿Seguro de eliminar este producto?')" class="btn btn-danger">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7">No se encontraron registros.</td>
                        </tr>
                    @endforelse

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <!-- Validación por si no hay registros (evitar errores) -->
            @if ($products->count())
            {{ $products->links() }}
        @endif
        </div>
    </div>
@endsection
