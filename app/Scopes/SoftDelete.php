<?php

declare(strict_types=1);

namespace App\Scopes;

use App\Enums\DBConstant;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class SoftDelete implements Scope
{
    protected $table;

    public function __construct($table)
    {
        $this->table = $table;
    }

    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param Builder $builder
     * @param Model   $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->where($this->table . '.is_archived', '=', DBConstant::ARCHIVE_FLAG_NOT_ARCHIVED);
    }
}
