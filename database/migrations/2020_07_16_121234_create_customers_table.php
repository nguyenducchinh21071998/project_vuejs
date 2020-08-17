<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('company_name')->nullable();
            $table->string('abbreviations', 20)->nullable();
            $table->string('investment')->nullable();
            $table->tinyInteger('rank')->nullable();
            $table->string('shareholder')->nullable();
            $table->string('website')->nullable();
            $table->string('number_employee', 20)->nullable();
            $table->string('description')->nullable();
            $table->string('contract_onsite_leader', 20)->nullable();
            $table->string('contract_onsite_member', 20)->nullable();
            $table->string('lab_contract_onsite_leader', 20)->nullable();
            $table->string('lab_contract_onsite_member', 20)->nullable();
            $table->string('contract_offshore_brse', 20)->nullable();
            $table->string('contract_offshore_se', 20)->nullable();
            $table->string('contract_offshore_tester', 20)->nullable();
            $table->string('contract_offshore_comtor', 20)->nullable();
            $table->string('lab_contract_offshore', 20)->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('customers');
    }
}
