<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 32)->unique();
            $table->string('parent_code', 64)->nullable();
            $table->string('company_code', 64)->nullable();
            $table->string('postal_code', 10)->nullable();
            $table->string('name', 64);
            $table->string('address', 255)->nullable();
            $table->string('color_code', 10)->nullable();
            $table->char('created_by', '4')->default("0001");
            $table->char('updated_by', '4')->default("0001");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
