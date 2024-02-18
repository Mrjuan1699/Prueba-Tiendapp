<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //Seed para las Marcas
        $brand = new Brand();

        $brand->reference= "2345";
        $brand->brand="Adidas";
        $brand->save();

        //Seed para los productos
        $product = new Product();
        $product->product= "Camisilla";
        $product->size="S";
        $product->comments="No";
        $product->brand="2345";
        $product->inventory= "34";
        $product->shipment_date="2023-01-02";
        $product->save();
        }
}
