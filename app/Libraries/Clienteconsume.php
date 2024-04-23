<?php

namespace App\Libraries;
use CodeIgniter\Config\BaseConfig;

class Clienteconsume
{
    protected $url;
    protected $client;

    protected $usuario;
    protected $password;

    protected $token;

    public function __construct($usuario, $password){
        $this->client                   = \Config\Services::curlrequest();
        $this->url                      = base_url('api/');

        $this->usuario                  = $usuario;
        $this->password                 = $password;

    }

    public function getToken(){
        return $this->token;
    }

    public function setToken(){
        var_dump( $this->url . "create" );
        $response                       = $this->client->request('POST', $this->url . 'create', 
            [
                'body'           => json_encode([
                    'user'              => $this->usuario,
                    'password'          => $this->password
                ]),
                'headers'               => [ 'Accept' => 'application/json' ]
            ]
        );
        $statuscode                     = $response->getStatusCode();
        $body                           = json_decode( $response->getBody() );

        if( $statuscode == 200){
            $this->token                = $body->token;
            return TRUE;
        }else{
            return FALSE;
        }
    }

    public function get( $method ){
        $response = $this->client->request('GET', $this->url . '/' . $method, 
            [
                'headers'               => [
                    'Accept'            => 'application/json',
                    'auth-token'        => $this->token,
                ]
            ]
        );

        $statuscode = $response->getStatusCode();
        $body = json_decode( $response->getBody() );

        if( $statuscode == 200){
            return $body;
        }else{
            return $body;
        }
    }

    public function getBody( $token, $method, $params ){
        $response = $this->client->request('GET', $this->url . '/' . $method, 
            [
                'form_params' => $params,
                'headers' => [
                    'Accept'     => 'application/json',
                    'auth-token' => $token,
                ]
            ]
        );

        $statuscode = $response->getStatusCode();
        $body = json_decode( $response->getBody() );

        if( $statuscode == 200){
            return $body;
        }else{
            return $body;
        }
    }

    public function post( $token, $method, $params ){
        $response = $this->client->request('POST', $this->url . '/' . $method, 
            [
                'form_params' => $params,
                'headers' => [ 'Accept' => 'application/json', 'auth-token' => $token ]
            ]
        );

        $statuscode = $response->getStatusCode();
        $body = json_decode( $response->getBody() );

        if( $statuscode == 200){
            return $body;
        }else{
            return $body;
        }
    }

    public function put( $token, $method, $params ){
        $response = $this->client->request('PUT', $this->url . '/' . $method, 
            [
                'form_params' => $params,
                'headers' => [ 'Accept' => 'application/json', 'auth-token' => $token ]
            ]
        );

        $statuscode = $response->getStatusCode();
        $body = json_decode( $response->getBody() );

        if( $statuscode == 200){
            return $body;
        }else{
            return $body;
        }
    }

}
