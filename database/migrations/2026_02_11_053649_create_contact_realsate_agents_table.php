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
        Schema::create('contact_realsate_agents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();

            $table->unsignedBigInteger('listing_id');
            $table->unsignedBigInteger('realstate_agent_id');

            
            $table->foreign('listing_id')->references('id')->on('listings')->onDelete('cascade');
            $table->foreign('realstate_agent_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_realsate_agents');
    }
};
