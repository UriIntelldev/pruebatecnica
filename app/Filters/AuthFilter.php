<?php 

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use Config\Services;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use CodeIgniter\API\ResponseTrait;

class AuthFilter implements FilterInterface
{
	use ResponseTrait;

	public function before(RequestInterface $request, $arguments = null)
	{
        // Validamos por header
        $key        = Services::getSecretKey();
		$headers    = $request->headers();
		$token 		= "";

		array_walk($headers, function(&$valor, $clave) {
			if( strtolower($clave) == "auth-token"){
				$token = str_replace("Auth-Token:", "", $valor->getValue());

				try
				{
					if( $token == ""){
						JWT::decode($token, new Key($key, 'HS256'));
					}else{
						return Services::response()->setJSON([ 'response_type'=>'error', 'message'=>'Requiere un token para acceder']);
					}
						
				}
				catch (\Exception $e)
				{
					return Services::response()->setJSON([ 'response_type'=>'error', 'message'=>'Requiere un token para acceder']);
				}
			}
		});
	}

	//--------------------------------------------------------------------

	public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
	{
		// Do something here
	}
}