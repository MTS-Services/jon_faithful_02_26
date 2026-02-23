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
        // create_pet_essentials_table
        Schema::create('pet_essentials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rental_id')->constrained()->cascadeOnDelete();
            $table->string('pet_type');        // e.g. "Small dogs", "Cats", "Large dogs"
            $table->string('icon')->nullable(); // optional icon identifier
            $table->enum('allowed', ['yes', 'no'])->default('yes');
            $table->integer('number_allowed')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_essentials');
    }
};
