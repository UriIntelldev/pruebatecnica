<?php

namespace App\Controllers;

use App\Models\BlogModel;
use App\Models\UserModel;


class Api extends Authorization
{
    public function index() {}

    public function blogs(){
        $blogs                  = new BlogModel();
        $info                   = $blogs->findAll();

        return $this->respond(
            [
                'response_type' => 'success',
                'message'       => 'Se han obtenido registros',
                'data'          => $info
            ], 200);
    }

    public function newBlog(){
        $blogs = new BlogModel();
        $data  = $this->request->
    }

    public function SearchBy

}
