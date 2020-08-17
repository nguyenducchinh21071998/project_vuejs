<?php

declare(strict_types=1);

namespace App\Repositories;

use  App\Services\ImageService;

abstract class BaseRepository implements BaseRepositoryInterface
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * @var \App\Services\ImageService
     */
    protected $imageService;

    /**
     * RepositoryAbstract constructor.
     */
    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
        $this->setModel();
    }

    /**
     * get model
     * @return string
     */
    abstract public function getModel();

    /**
     * Set model
     */
    public function setModel()
    {
        $this->model = app()->make(
            $this->getModel()
        );
    }

    /**
     * Get all
     */
    public function all()
    {
        return $this->model::all();
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function find($id, $attributes = null)
    {
        if ($attributes) {
            $result = $this->model::select($attributes)->findOrFail($id);
        } else {
            $result = $this->model->findOrFail($id);
        }

        return $result;
    }

    /**
     * Delete
     *
     * @param $id
     */
    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }

    /**
     * create
     * @param  array
     */
    public function create($attributes = [])
    {
        return $this->model::create($attributes);
    }

    /**
     * insert
     * @param  array
     */
    public function insert($array = [])
    {
        return $this->model::insert($array);
    }

    /**
     * update
     * @param  $id, array
     * @return  bool
     */
    public function update($id, $attributes = [])
    {
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);
            return $result;
        }

        return false;
    }
}
