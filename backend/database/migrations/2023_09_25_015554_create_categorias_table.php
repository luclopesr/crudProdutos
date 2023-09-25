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
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });

        DB::table('categorias')->insert([
            ['nome' => 'Alimentos'],
            ['nome' => 'Roupas'],
            ['nome' => 'Eletrônicos'],
            ['nome' => 'Livros'],
            ['nome' => 'Arte'],
            ['nome' => 'Outros'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorias');
    }
};
