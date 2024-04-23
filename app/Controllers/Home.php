<?php

namespace App\Controllers;

use App\Libraries\Clienteconsume;

class Home extends BaseController
{
    protected $apiCliente;


    public function index(): string
    {
        $usuario                        = getenv('apiUser');
        $password                       = getenv('apiPassword');
        
        $this->apiCliente               = new Clienteconsume($usuario, $password);
        $this->apiCliente->setToken();

        $info                           = $this->apiCliente->get('getBlogs');
        $blogs                          = $info->data;

        return view('header') . view('menu') . view('slide') . view('footer');
    }
}
