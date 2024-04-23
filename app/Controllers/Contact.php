<?php

namespace App\Controllers;

class Contact extends BaseController
{
    public function index(): string
    {
        return view('header') . view('menu') . view('contact') . view('footer');
    }
}
