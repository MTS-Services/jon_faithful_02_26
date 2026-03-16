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
        Schema::create('city_mortgage_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained('cities')->cascadeOnDelete();
            $table->unsignedBigInteger('base_price')->default(0);
            $table->unsignedInteger('annual_tax')->default(0);
            $table->unsignedInteger('annual_insurance')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->unique('city_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('city_mortgage_settings');
    }
};

