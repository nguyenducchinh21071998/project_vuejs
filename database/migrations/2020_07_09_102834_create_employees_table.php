<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->char('id', 4);
            $table->primary('id');
            $table->integer('position_id')->references('id')->on('positions');
            $table->string('department_code', 32)->references('code')->on('departments')->nullable();
            $table->integer('account_id')->references('id')->on('accounts');
            $table->string('job_title_code', 32)->references('code')->on('job_titles');
            $table->string('company_code', 32)->references('code')->on('companies');
            $table->string('name', 255);
            $table->string('phone', 20)->nullable();
            $table->string('phone_family', 20)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('current_address', 255)->nullable();
            $table->tinyInteger('gender')->nullable();
            $table->date('birthday')->nullable();
            $table->string('other_email', 255)->nullable();
            $table->string('identity_number', 20)->nullable();
            $table->date('identity_card_date')->nullable();
            $table->string('identity_card_place', 255)->nullable();
            $table->string('insurance_number', 20)->nullable();
            $table->string('image_url', 255)->nullable();
            $table->integer('number_of_days_leave')->default(0);
            $table->string('link_facebook', 255)->nullable();
            $table->string('nation', 45)->nullable();
            $table->string('nationality', 45)->nullable();
            $table->tinyInteger('level')->nullable();
            $table->tinyInteger('japanese_level')->nullable();
            $table->string('work_type', 20)->nullable();
            $table->string('visa_card_number', 20)->nullable();
            $table->date('visa_date_period')->nullable();
            $table->string('university_name', 255)->nullable();
            $table->date('join_date');
            $table->date('resignation_date')->nullable();
            $table->text('resignation_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
