            <!-- Contact Start -->
            <div class="container bg-white pt-5">
                <div class="row px-3 pb-2">
                    <div class="col-sm-4 text-center mb-3">
                        <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                        <h4 class="font-weight-bold">Dirección</h4>
                        <p>Armando Méndez de la Luz #3, Col. El Moral, Xalapa, Ver</p>
                    </div>
                    <div class="col-sm-4 text-center mb-3">
                        <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                        <h4 class="font-weight-bold">Teléfono</h4>
                        <p>+52 228 254 0047 <br/>
                        +52 228 186 4851</p>
                    </div>
                    <div class="col-sm-4 text-center mb-3">
                        <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                        <h4 class="font-weight-bold">Correo Electrónico</h4>
                        <p>uriel2885@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-12 pb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="Nombre" required="required" data-validation-required-message="Su nombre es requerido." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" id="email" placeholder="Correo Electrónico" required="required" data-validation-required-message="Su Correo Electrónico es requerido." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Asunto" required="required" data-validation-required-message="El asunto es requerido." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" rows="8" id="message" placeholder="Mensaje" required="required" data-validation-required-message="El Mensaje es requerido"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary" type="submit" id="sendMessageButton">Enviar Correo Electrónico</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Contact End -->