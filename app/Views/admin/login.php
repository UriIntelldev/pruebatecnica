<!DOCTYPE html>
<html lang="en" dir="">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Centralita</title>
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url('favicon.ico'); ?>">
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url('/resources/css/lite-purple.css'); ?>">
</head>

<body class="text-left">
    <div class="auth-layout-wrap" style="background-image: url(<?php echo base_url('resources/img/background.jpg'); ?>)">
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">

                    <div class="col-md-6">
                        <div class="p-4">
                            <div class="text-center mb-4"> <!--auth-logo -->
                                <h1>Aplicacion blog</h1>
                                <p>Con el usuario "admin" y password "admin" podrá acceder a la actualización, eliminación y a agregar blogs dentro de esta prueba tecnica. Todo se guarda en la base de datos llamada: "pruebatecnica". Con el usuario "root" y con el password "". </p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <div class="mb-4" style="padding:20px;"> 
                            <h1 class="mb-12 text-18 text-center" style="color: orange;"> <b>INGRESAR A LA APLICACION</b> </h1>

                            <form id="login" method="POST">

                                <div class="form-group">
                                    <label for="usuario"> USUARIO : </label>
                                    <input name="usuario" id="usuario" class="form-control" type="text" value="">
                                </div>

                                <div class="form-group">
                                    <label for="password"> CONTRASEÑA : </label>
                                    <input name="password" id="password" class="form-control" type="password" value="">
                                </div>

                                <div class="mb-4 text-danger">
                                    <?php if ( session()->getFlashdata('msg') ){ ?>
                                        <?php echo session()->getFlashdata('msg'); ?>
                                    <?php } ?>
                                    <?php echo ( empty($validation) ) ? '' : $validation->listErrors(); ?>
                                </div>
                                <button name="login" id="login" type="submit" class="btn btn orange btn-block mt-2" style="color:#fff;"> <b>ACCESAR</b>  </button>

                            </form>

                        </div>
                    </div>
                       
                </div>
            </div>
        </div>
    </div>

    <script src="<?php echo base_url('/resources/js/jquery-3.3.1.min.js'); ?>"></script>
    <script src="<?php echo base_url('/resources/js/bootstrap.bundle.min.js'); ?>"></script>
    <script src="<?php echo base_url('/resources/js/script.js'); ?>"></script>
</body>

</html>