<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/blog', 'Blog::index');
$routes->get('/about', 'About::index');
$routes->get('/contact', 'Contact::index');
$routes->get('/admin', 'Administration::index');

$routes->resource('api/create', ['controller' => 'Authorization::create']);
$routes->resource('api/getBlogs', ['controller' => 'Api::blogs']);
//$routes->post('/api/v1/getAllBlogs',    'Api::blogs',       ['filter' =>'authFilter']);