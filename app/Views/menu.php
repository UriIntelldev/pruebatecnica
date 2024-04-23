<body>
    <div class="wrapper">
        <div class="sidebar">
            <div class="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
                <img class="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src="<?php echo base_url('/resources/img/profile.jpg') ;?>" alt="Uriel Pérez Amador">
                <h1 class="font-weight-bold"> URIEL PEREZ A. </h1>
                <p class="mb-4">
                    ➢ Músico, extrovertido, me encanta leer, escribir, jugar Metin2 y disfrutar la vida. Soy Software Engeneer, desarrollador de software por más de 12 años, Cristocentrico. Amo viajar.
                </p>
                <div class="d-flex justify-content-center mb-5">
                    <a class="btn btn-outline-primary mr-2" href="https://twitter.com/uriintelldev" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary mr-2" href="https://www.facebook.com/uriintelldev" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary mr-2" href="https://www.linkedin.com/in/uriel2885" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary mr-2" href="https://www.instagram.com/uri_upa" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <a href="<?php echo base_url('/admin'); ?>" class="btn btn-lg btn-block btn-primary mt-auto">Administrador Blogs</a>
            </div>
            <div class="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
                <i class="fas fa-2x fa-angle-double-right text-primary"></i>
            </div>
        </div>
        <div class="content">
            <!-- Navbar Start -->
            <div class="container p-0">
                <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
                    <a href="" class="navbar-brand d-block d-lg-none">Navigation</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav m-auto">
                            <a href="<?php echo base_url('/'); ?>" class="nav-item nav-link">Home</a>
                            <a href="<?php echo base_url('/about'); ?>" class="nav-item nav-link">Acerca</a>
                            <a href="<?php echo base_url('/blog'); ?>" class="nav-item nav-link">Blog</a>
                            <a href="<?php echo base_url('/contact'); ?>" class="nav-item nav-link">Contacto</a>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- Navbar End -->