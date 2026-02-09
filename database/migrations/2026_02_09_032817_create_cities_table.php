<?php

use App\Enums\ActiveInactive;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sort_order')->default(0);
            $table->string('name', 255);
            $table->char('state', 2);
            $table->string('slug', 255)->unique();
            $table->string('status')->default(ActiveInactive::ACTIVE->value);
            $table->timestamps();

            // Indexes
            $table->index(['name', 'state']);
            $table->index('slug');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
