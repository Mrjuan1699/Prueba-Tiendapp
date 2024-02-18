<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product',50)->default('');
            $table->string('size',5)->default('');
            $table->string('comments',100)->default('');
            $table->string('brand',50)->default('');
            $table->foreign('brand')->references('reference')->on('brands')->onDelete('cascade');
            $table->bigInteger('inventory')->default();
            $table->date('shipment_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
