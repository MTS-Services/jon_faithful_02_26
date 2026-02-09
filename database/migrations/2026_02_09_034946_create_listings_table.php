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
        Schema::create('listings', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('sort_order')->default(0);
            $table->unsignedBigInteger('city_id');

            $table->string('title', 500);
            $table->text('description')->nullable();
            $table->decimal('purchase_price', 12, 2)->nullable();
            $table->string('listing_status');
            $table->string('property_type');

            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('square_feet');

            $table->string('primary_image_url', 1000)->nullable();
            $table->string('status')->default(ActiveInactive::INACTIVE->value);

            // Foreign Keys
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('city_id')->references('id')->on('cities')->cascadeOnDelete();

            $table->timestamps();

            // Indexes
            $table->index('user_id');
            $table->index('city_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
