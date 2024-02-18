@extends('themes.index')

@section('content')
    <div class="container text-center border mt-5 py-5 w-50">
        <h1>Listado de marcas</h1>
        <div class="mt-4 ml-5">
            <a href="{{ route('brand.create') }}" class="btn btn-success">Crear marca</a>
        </div>

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
                        <th class="bg-secondary">Referencia</th>
                        <th class="bg-secondary">Marca </th>
                        <th class="bg-secondary">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <!-- Bucle -->
                    @forelse ($brands as $brand)
                        <tr>
                            <td scope="row">{{ $brand->reference }}</td>
                            <td>{{ $brand->brand }}</td>
                            <td>
                                <a href="{{ route('brand.edit', $brand->reference) }}" class="btn btn-warning">Editar</a>
                                <form action="{{ route('brand.destroy', $brand) }}" method="post" class="d-inline">
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" onclick="return confirm('¿Seguro de eliminar esta marca?')"
                                        class="btn btn-danger">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="3">No se encontraron registros.</td>
                        </tr>
                    @endforelse

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <!-- Validación por si no hay registros (evitar errores) -->
            @if ($brands->count())
                {{ $brands->links() }}
            @endif
        </div>
    </div>
@endsection
