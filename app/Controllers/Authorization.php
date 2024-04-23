<?php 

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

use Config\Services;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Authorization extends ResourceController
{

	protected $format = 'json';

	public function create()
	{
       
        $json               = $this->request->getJSON();

		if ($json->user === getenv('apiUser') && $json->password == getenv('apiPassword')) {
			$key            = Services::getSecretKey();
			$payload        = [
				'iat'       => time(),
				'exp'       => time() + 60,
				'data'      => ['access' => 'success'],
			];

            $jwt            = JWT::encode($payload, $key, 'HS256');
			return $this->respond(['response_type'=>'success', 'token' => $jwt], 200);
		}

		return $this->respond(['message' => 'Invalid login details'], 200);
	}

    public function valida()
    {
        $token              = $this->request->getPost("token");

        $key                = Services::getSecretKey();

        if( $this->validateToken($token) == false){
            return $this->respond(['message' => 'Token Invalido'], 401);
        }else{
            $data           = JWT::decode($token, new Key($key, 'HS256'));
            return $this->respond(['data' => $data], 200);
        }
    }

    public function validateToken($token)
    {
        try {
            $key             = Services::getSecretKey();

            return JWT::decode($token, new Key($key, 'HS256'));
        } catch (\Exception $e) {
            return false;
        }
    }
}