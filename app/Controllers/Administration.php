<?php

namespace App\Controllers;

class Administration extends BaseController
{
    public function index(): string
    {
        return view('/admin/login');
    }
}
