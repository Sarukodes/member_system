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
        Schema::create('member_models', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("province");
            $table->string("district");
            $table->string("local_body");
            $table->integer("ward");
            $table->string("tole");
            $table->unsignedBigInteger("phoneno");
            $table->date("date");




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_models');
    }
};
