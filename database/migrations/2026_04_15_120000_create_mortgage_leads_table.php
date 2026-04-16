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
        Schema::create('mortgage_leads', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('email');
            $table->string('phone_number');
            $table->string('timeline');
            $table->string('purchase_price_range');
            $table->string('down_payment_range');
            $table->string('location')->default('tennessee');
            $table->string('credit_score')->nullable();
            $table->string('first_time_buyer')->nullable();
            $table->boolean('consent')->default(false);
            $table->json('calculator_snapshot')->nullable();
            $table->timestamps();
        });
    }
 
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mortgage_leads');
    }
};
