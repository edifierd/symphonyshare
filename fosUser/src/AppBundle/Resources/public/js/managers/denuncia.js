
$(function() {

    validarCaptcha = function(){
        if ($("#g-recaptcha-response").val() != ""){
           $("#btn_send_email").removeAttr('disabled');
        } else {
            setTimeout('validarCaptcha();','1000');
        }
    }

    $(".denuncia_tipo").on('change', function(e){
        denunciaManager.selectTipoDenuncia();
    });

    $("#cambiarEstadoButton").on('click', function(e) {
        denunciaManager.cambiarEstado();
    });

    $("#recepcionarFiscaliaButton").on('click', function(e) {
        denunciaManager.cambiarEstado();
    });

    $("#clasificarDenunciaButton").on('click', function(e) {
        denunciaManager.cambiarEstado();
    });

    $("#recepcionarUOIButton").on('click', function(e) {
        denunciaManager.cambiarEstado();
    });

    $("#rechazarDenunciaButton").on('click', function(e) {
        denunciaManager.cambiarEstado();
    });

    $("#denuncia_paisIdentificada").on('change', function(e){
        var self = $(this);

        $("#denuncia_provinciaIdentificada").empty();                
        $("#denuncia_provinciaIdentificada").append("<option value=''>Provincia donde reside</option>");
        //$("#denuncia_provinciaIdentificada").val('').trigger("change");
        $("#denuncia_partidoIdentificada").empty();                
        $("#denuncia_partidoIdentificada").append("<option value=''>Partido donde reside</option>");
        //$("#denuncia_partidoIdentificada").val('').trigger("change");
        $("#denuncia_localidadIdentificada").empty();                
        $("#denuncia_localidadIdentificada").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadIdentificada").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getProvinciasPais(self.val(), $("#denuncia_provinciaIdentificada"));
        }
    });

    $("#denuncia_provinciaIdentificada").on('change', function(e){
        var self = $(this);

        $("#denuncia_partidoIdentificada").empty();                
        $("#denuncia_partidoIdentificada").append("<option value=''>Partido donde reside</option>");
        //$("#denuncia_partidoIdentificada").val('').trigger("change");
        $("#denuncia_localidadIdentificada").empty();                
        $("#denuncia_localidadIdentificada").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadIdentificada").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getPartidosProvincia(self.val(), $("#denuncia_partidoIdentificada"));
        }
    });

    $("#denuncia_partidoIdentificada").on('change', function(e){
        var self = $(this);

        $("#denuncia_localidadIdentificada").empty();                
        $("#denuncia_localidadIdentificada").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadIdentificada").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getLocalidadesPartido(self.val(), $("#denuncia_localidadIdentificada"));
        }
    });

    $("#denuncia_paisAnonima").on('change', function(e){
        var self = $(this);
        $("#denuncia_provinciaAnonima").empty();                
        $("#denuncia_provinciaAnonima").append("<option value=''>Provincia donde reside</option>");
        //$("#denuncia_provinciaAnonima").val('').trigger("change");
        $("#denuncia_partidoAnonima").empty();                
        $("#denuncia_partidoAnonima").append("<option value=''>Partido donde reside</option>");
        //$("#denuncia_partidoAnonima").val('').trigger("change");
        $("#denuncia_localidadAnonima").empty();                
        $("#denuncia_localidadAnonima").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadAnonima").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getProvinciasPais(self.val(), $("#denuncia_provinciaAnonima"));
        }
    });

    $("#denuncia_provinciaAnonima").on('change', function(e){
        var self = $(this);

        $("#denuncia_partidoAnonima").empty();                
        $("#denuncia_partidoAnonima").append("<option value=''>Partido donde reside</option>");
        //$("#denuncia_partidoAnonima").val('').trigger("change");
        $("#denuncia_localidadAnonima").empty();                
        $("#denuncia_localidadAnonima").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadAnonima").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getPartidosProvincia(self.val(), $("#denuncia_partidoAnonima"));
        }
    });

    $("#denuncia_partidoAnonima").on('change', function(e){
        var self = $(this);

        $("#denuncia_localidadAnonima").empty();                
        $("#denuncia_localidadAnonima").append("<option value=''>Ciudad/Localidad donde reside</option>");
        //$("#denuncia_localidadAnonima").val('').trigger("change");
        if(self.val() != ""){
            denunciaManager.getLocalidadesPartido(self.val(), $("#denuncia_localidadAnonima"));
        }
    });

    $("#denuncia_tipoPersonaIdentificada_0").on('change', function(e){
        $("#denuncia_nombreIdentificada").val(""); 
        $("#denuncia_apellidoIdentificada").val(""); 
        $("#denuncia_razonSocialIdentificada").val(""); 
        $("#denuncia_cuitCuilIdentificada").val("");

        $("#div_nombreIdentificada").hide();
        $("#div_apellidoIdentificada").hide();
        $("#div_razonSocialIdentificada").hide();

        if ($("#denuncia_tipoPersonaIdentificada_0").is(':checked')){
            $("#div_nombreIdentificada").show();
            $("#div_apellidoIdentificada").show();
            $("#div_razonSocialIdentificada").hide();
            $("#div_x_juridica").show();
            $("#div_ocupacionxjuridica").show();        
        } else {
            $("#div_razonSocialIdentificada").show();
            $("#div_nombreIdentificada").hide();
            $("#div_apellidoIdentificada").hide();
            $("#div_x_juridica").hide();
            $("#div_ocupacionxjuridica").hide();        
        }
    });

    $("#denuncia_tipoPersonaIdentificada_1").on('change', function(e){
        $("#denuncia_nombreIdentificada").val(""); 
        $("#denuncia_apellidoIdentificada").val(""); 
        $("#denuncia_razonSocialIdentificada").val(""); 
        $("#denuncia_cuitCuilIdentificada").val("");

        $("#div_nombreIdentificada").hide();
        $("#div_apellidoIdentificada").hide();
        $("#div_razonSocialIdentificada").hide();

        if ($("#denuncia_tipoPersonaIdentificada_1").is(':checked')){
            $("#div_razonSocialIdentificada").show();
            $("#div_nombreIdentificada").hide();
            $("#div_apellidoIdentificada").hide();
            $("#div_x_juridica").hide();
            $("#div_ocupacionxjuridica").hide();        
        } else {
            $("#div_nombreIdentificada").show();
            $("#div_apellidoIdentificada").show();
            $("#div_razonSocialIdentificada").hide();
            $("#div_x_juridica").show();
            $("#div_ocupacionxjuridica").show();        
        }
    });

    $("#denuncia_cuitCuilIdentificada").on('keyup', function(e){
        var self = $(this);
        if (self.val().length == 11){
            denunciaManager.validarCuitCuil(self);
        } else {
            $("#denuncia_cuitCuilValido").val("N");
        }
    });

    $("#denuncia_depIdDenunciado").append("<option value='otro'>OTRO</option>");
    $("#denuncia_depIdDenunciado").on('change', function(e){
        var self = $(this);
        if (self.val() == "otro"){
            $("#div_depOtro").show();
        } else {
            $("#div_depOtro").hide();
        }
    });

    $("#btn_back_anonima").on('click', function(e){
        denunciaManager.cleanTipoDenuncia();
        denunciaManager.toogleTabs("li-tab3");
        $('#rootwizard').find("a[href*='#tab3']").trigger('click');
    });

    $("#btn_back_identificada").on('click', function(e){
        denunciaManager.cleanTipoDenuncia();
        denunciaManager.toogleTabs("li-tab3");
        $('#rootwizard').find("a[href*='#tab3']").trigger('click');
    });

    $("#btn_back_denuncia").on('click', function(e){
        denunciaManager.toogleTabs("li-tab4");
        $('#rootwizard').find("a[href*='#tab4']").trigger('click');
    });

    $("#btn_back_confirmacion").on('click', function(e){
        denunciaManager.toogleTabs("li-tab5");
        $('#rootwizard').find("a[href*='#tab5']").trigger('click');
    });

    $("#denuncia_email").on('keydown', function(e){       
        $("#error_mail").addClass('hidden');
        var self = $(this);
        var code = e.keyCode || e.which;
        if(self.val() != ""){
            if (code === 13) {                 
                e.preventDefault();
                if ($("#g-recaptcha-response").val() != ""){
                    denunciaManager.sendMail();
                } else {
                    $("#error_captcha").removeClass('hidden');
                }
            }
        } else {
            $("#error_mail").removeClass('hidden');
        }
    });

    $("#denuncia_token").on('keydown', function(e){       
        var self = $(this);
        var code = e.keyCode || e.which;
        if(self.val() != ""){
            if (code === 13) {                 
                e.preventDefault();
                denunciaManager.validarToken();
            }
        }
    });


});

//Manager para denuncia
var denunciaManager = {
    toogleTabs: function(idTab){
        $("#"+idTab).removeClass("disabled");
        $(".li-tab").each(function() {
            if ($(this).attr("id") != idTab){
                $(this).addClass("disabled");
            }
        });
    },
    sendMail: function(){
        if ($("#g-recaptcha-response").val() == ""){
            $("#error_captcha").removeClass("hidden");
        } else {
            if (($("#denuncia_email").val() == null) || ($("#denuncia_email").val() == "")) {
                $("#error_mail").removeClass("hidden");
            } else {
                Pace.track(function(){
                    $.ajax({    
                        url: Routing.generate('send_email_token'),
                        type: 'POST',
                        data: {
                                email : $("#denuncia_email").val(),
                            },
                            beforeSend: function(){
                                $("#btn_send_email").prop("disabled", true); 
                            },
                            success: function (data, txt, jqXHR) {    
                                if (jqXHR.status == 200) {
                                    if (data.valid){
                                        $("#denuncia_denunciaId").val(data.denunciaId);
                                        denunciaManager.toogleTabs("li-tab2");
                                        $('#rootwizard').find("a[href*='#tab2']").trigger('click');
                                    } else {
                                        $("#btn_send_email").prop("disabled", false); 
                                        $("#error_mail").removeClass('hidden');
                                    }
                                    
                                }
                            },
                            error: function(){
                                alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                            }
                    });
                });
            }
        }
    },
    validarToken: function(){
        var token = $("#denuncia_token").val();
        if (token == ""){
            $("#error_token").removeClass('hidden');
        } else {
            Pace.track(function(){
                $.ajax({    
                    url: Routing.generate('validate_token'),
                    type: 'POST',
                    data: {
                            token      : token,
                            email      : $("#denuncia_email").val(),
                            denunciaId : $("#denuncia_denunciaId").val()
                        },
                        beforeSend: function(){
                            $("#btn_confirm_token").prop("disabled", true); 
                        },
                        success: function (data, txt, jqXHR) {    
                            if (jqXHR.status == 200) {
                                if (data.valid){
                                    denunciaManager.toogleTabs("li-tab3");
                                    $('#rootwizard').find("a[href*='#tab3']").trigger('click');  
                                } else {
                                    $("#btn_confirm_token").prop("disabled", false); 
                                    $("#error_token").removeClass('hidden');                   
                                }
                                
                            }
                            waitingDialog.hide();
                        },
                        error: function(){
                            alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                        }
                });
            });
        }
    },
    selectTipoDenuncia: function(){
        var checked = false;
        var tipo; 
        $(".denuncia_tipo").each(function() {
            if ($(this).is(':checked')){
                checked = true;
                tipo = $(this).val();
            }
        });
        if (checked){
            switch (tipo) {
                case "ANONIMA":
                    denunciaManager.toogleTabs("li-tab4");
                    $('#rootwizard').find("a[href*='#tab4']").trigger('click');
                    $('#denuncia_a').show(); 
                    $('#denuncia_i').hide();
                    break;
                case "IDENTIFICADA":
                    denunciaManager.toogleTabs("li-tab4");
                    $('#rootwizard').find("a[href*='#tab4']").trigger('click');
                    $('#denuncia_a').hide();
                    $('#denuncia_i').show();
                    $('#tituloIdentificada').removeClass('hidden');
                    $('#tituloReservada').addClass('hidden');
                    $('#notaReservada').addClass('hidden');
                    break;
                case "RESERVADA":
                    denunciaManager.toogleTabs("li-tab4");
                    $('#rootwizard').find("a[href*='#tab4']").trigger('click');
                    $('#denuncia_a').hide();
                    $('#denuncia_i').show();
                    $('#tituloIdentificada').addClass('hidden');
                    $('#tituloReservada').removeClass('hidden');
                    $('#notaReservada').removeClass('hidden');
                    break;
            } 
        } else {
            alertify.error("<i class='fa fa-exclamation-triangle'></i> Debe seleccionar un Tipo de Denuncia.");                    
        }
    },
    getProvinciasPais: function(paisId, contenedor){
        var opt = this.opt;
        Pace.track(function(){
            $.ajax({    
                url: Routing.generate('get_provincias_pais'),
                type: 'post',
                data: {
                    paisId : paisId,
                },
                success: function (data, txt, jqXHR) {    
				    if (jqXHR.status == 204) {
                        contenedor.prop('disabled', true);
                        $('#denuncia_provinciaIdentificada').prop('disabled', true);
                        $('#denuncia_provinciaAnonima').prop('disabled', true);
                        $('#denuncia_partidoIdentificada').prop('disabled', true);
                        $('#denuncia_partidoAnonima').prop('disabled', true);
                        $('#denuncia_localidadIdentificada').prop('disabled', true);
                        $('#denuncia_localidadAnonima').prop('disabled', true);
                        $('#div_provinciaI').addClass('p-field-disabled');                            
                        $('#div_partidoI').addClass('p-field-disabled');
                        $('#div_localidadI').addClass('p-field-disabled');
                        $('#div_provinciaA').addClass('p-field-disabled');                            
                        $('#div_partidoA').addClass('p-field-disabled');
                        $('#div_localidadA').addClass('p-field-disabled');
                    }
                    if (jqXHR.status == 200) {  
                        var data = jQuery.parseJSON(data); 
                        contenedor.prop('disabled', false);
                        $('#denuncia_provinciaIdentificada').prop('disabled', false);
                        $('#denuncia_provinciaAnonima').prop('disabled', false);
                        $('#denuncia_partidoIdentificada').prop('disabled', false);
                        $('#denuncia_partidoAnonima').prop('disabled', false);
                        $('#denuncia_localidadIdentificada').prop('disabled', false);
                        $('#denuncia_localidadAnonima').prop('disabled', false);     
                        $('#div_provinciaI').removeClass('p-field-disabled');
                        $('#div_partidoI').removeClass('p-field-disabled');
                        $('#div_localidadI').removeClass('p-field-disabled'); 
                        $('#div_provinciaA').removeClass('p-field-disabled');
                        $('#div_partidoA').removeClass('p-field-disabled');
                        $('#div_localidadA').removeClass('p-field-disabled');                                                          
                        $.each(data, function(key, value) {
                            contenedor.append("<option value='"+value.id+"'>"+value.descrip+"</option>");
                        });
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                }
            });
        }); 
    },
    getPartidosProvincia: function(provinciaId, contenedor){
        var opt = this.opt;
        Pace.track(function(){
            $.ajax({    
                url: Routing.generate('get_partidos_provincia'),
                type: 'post',
                data: {
                        provinciaId : provinciaId,
                    },
                    success: function (data, txt, jqXHR) {    
						if (jqXHR.status == 204) {                
                          
                            alertify.error("<i class='fa fa-exclamation-triangle'></i> No existen partidos para la provincia seleccionada.");
                        }
                        if (jqXHR.status == 200) {
                            var data = jQuery.parseJSON(data);                                                                
                            if (data.length > 1) {
                                contenedor.prop('disabled', false);
                                $('#denuncia_partidoIdentificada').prop('disabled', false);
                                $('#denuncia_partidoAnonima').prop('disabled', false);
                                $('#denuncia_localidadIdentificada').prop('disabled', false);
                                $('#denuncia_localidadAnonima').prop('disabled', false);     
                                $('#div_partidoI').removeClass('p-field-disabled');
                                $('#div_localidadI').removeClass('p-field-disabled'); 
                                $('#div_partidoA').removeClass('p-field-disabled');
                                $('#div_localidadA').removeClass('p-field-disabled');  
                              $.each(data, function(key, value) {
                                  contenedor.append("<option value='"+value.id+"'>"+value.descrip+"</option>");
                              });
                            } else {
                                contenedor.prop('disabled', true);
                                $('#denuncia_partidoIdentificada').prop('disabled', true);
                                $('#denuncia_partidoAnonima').prop('disabled', true);
                                $('#denuncia_localidadIdentificada').prop('disabled', true);
                                $('#denuncia_localidadAnonima').prop('disabled', true);     
                                $('#div_partidoI').addClass('p-field-disabled');
                                $('#div_localidadI').addClass('p-field-disabled'); 
                                $('#div_partidoA').addClass('p-field-disabled');
                                $('#div_localidadA').addClass('p-field-disabled');                                                          
                            }
                        }
                    },
                    error: function(){
                        alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                    }
            });
        }); 
    },
    getLocalidadesPartido: function(partidoId, contenedor){
        var opt = this.opt;
        Pace.track(function(){
            $.ajax({    
                url: Routing.generate('get_localidades_partido'),
                type: 'post',
                data: {
                    partidoId : partidoId,
                },
                success: function (data, txt, jqXHR) {    
					if (jqXHR.status == 204) {
                        alertify.error("<i class='fa fa-exclamation-triangle'></i> No existen localidades para el partido seleccionado.");
                    }
                    if (jqXHR.status == 200) {  
                        var data = jQuery.parseJSON(data);                                                                
                        $.each(data, function(key, value) {
                            contenedor.append("<option value='"+value.id+"'>"+value.descrip+"</option>");
                        });
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                }
            });
        });
    },
    nextDenunciaAnonima: function(){
        $(".p-field-sub-text").addClass("hidden");
        

        
        

        var checked = false;
        var valid   = true;
        $(".denuncia_sexo_anonima").each(function() {
            if ($(this).is(':checked')){
                checked = true;
            }
        });
        if (checked == false){
            valid   = false;
            $("#error_sexoAnonima").removeClass("hidden");
        }

        var checked = false;
        $(".denuncia_edad_anonima").each(function() {
            if ($(this).is(':checked')){
                checked = true;
            }
        });
        if (checked == false){
            valid   = false;
            $("#error_edadAnonima").removeClass("hidden");
        }
        if ($("#denuncia_paisAnonima").val() == ""){
            valid   = false;
            $("#error_paisAnonima").removeClass("hidden");
        }
        if ($("#denuncia_nacionalidadAnonima").val() == ""){
            valid   = false;
            $("#error_nacionalidadAnonima").removeClass("hidden");
        }
        if (($("#denuncia_provinciaAnonima option").length > 1) && ($("#denuncia_provinciaAnonima").val() == "")){
            valid   = false;
            $("#error_provinciaAnonima").removeClass("hidden");
        }
        if (($("#denuncia_partidoAnonima option").length > 1) && ($("#denuncia_partidoAnonima").val() == "")){
            valid   = false;
            $("#error_partidoAnonima").removeClass("hidden");
        }
        if (($("#denuncia_localidadAnonima option").length > 1) && ($("#denuncia_localidadAnonima").val() == "")){
            valid   = false;
            $("#error_localidadAnonima").removeClass("hidden");
        }
        if ($("#denuncia_ocupacionAnonima").val() == ""){
            valid   = false;
            $("#error_ocupacionAnonima").removeClass("hidden");
        }

        $('html,body').animate({scrollTop: $("#tab5").offset().top}, 2000);
        if (valid){
            denunciaManager.toogleTabs("li-tab5");

            $('#rootwizard').find("a[href*='#tab5']").trigger('click');
            
        }
    },
    validarCuitCuil: function(cuitCuil) {
        //Se bloquea el cuit para que no se pueda cambiar mientras se buscan los datos
        cuitCuil.attr('readonly', true);
        Pace.track(function(){
            $.ajax({
                url: "https://soa.afip.gob.ar/sr-padron/v2/persona/" + cuitCuil.val(),
                dataType: 'json',
                type: 'GET',
                success: function (result) {
                    cuitCuil.attr('readonly', false);
                    if (result.success == true){
                        $("#error_cuitCuilIdentificada").addClass("hidden");
                        $("#denuncia_cuitCuilValido").val("S");
                        if (result.data.tipoPersona == "FISICA") {
                            $("#error_apellidoIdentificada").addClass("hidden");
                            $("#error_nombreIdentificada").addClass("hidden");
                            $("#denuncia_tipoPersonaIdentificada_0").prop('checked', true);
                            $("#denuncia_tipoPersonaIdentificada_1").prop('checked', false);
                            $("#div_nombreIdentificada").show(); 
                            $("#div_apellidoIdentificada").show();
                            $("#div_razonSocialIdentificada").hide();
                            $("#div_x_juridica").show();
                            $("#div_ocupacionxjuridica").show();
                            denunciaManager.parsearNombre(result.data.nombre);
                        }
                        if (result.data.tipoPersona == "JURIDICA") {
                            $("#error_razonSocialIdentificada").addClass("hidden");
                            $("#denuncia_tipoPersonaIdentificada_1").prop('checked', true);
                            $("#denuncia_tipoPersonaIdentificada_0").prop('checked', false);
                            $("#div_nombreIdentificada").hide(); 
                            $("#div_apellidoIdentificada").hide();
                            $("#div_razonSocialIdentificada").show();
                            $("#div_x_juridica").hide();
                            $("#div_ocupacionxjuridica").hide();
                            $("#denuncia_razonSocialIdentificada").val(result.data.nombre);
                        } 
                    } else {
                        $("#denuncia_cuitCuilValido").val("N");
                        $("#denuncia_nombreIdentificada").val("");
                        $("#denuncia_apellidoIdentificada").val("");
                        $("#denuncia_razonSocialIdentificada").val("");
                        $("#div_nombreIdentificada").hide(); 
                        $("#div_apellidoIdentificada").hide();
                        $("#div_razonSocialIdentificada").hide();
                        $("#error_cuitCuilIdentificada").removeClass("hidden");
                    }
                },
                error: function (result) {
                    cuitCuil.attr('readonly', false);
                    $("#denuncia_cuitCuilValido").val("S");                }
            });
        });
    }, 
    parsearNombre: function(nomAp){
        var res = nomAp.split(" "); 
        var nom = "";
        for (var i = 1; i <= res.length-1; i++) {
            if (i == 1){
                nom = res[i]; 
            } else {
                nom = nom + " " + res[i];
            }
        }
        $("#denuncia_nombreIdentificada").val(nom);
        $("#denuncia_apellidoIdentificada").val(res[0]);
    },
    nextDenunciaIdentificada: function(){
        $(".p-field-sub-text").addClass("hidden");

        var valid = true;

        if (!$("#denuncia_tipoPersonaIdentificada_0").prop("checked")){
            if (!$("#denuncia_tipoPersonaIdentificada_1").prop("checked")){
                valid = false;
                $("#error_tipoPersonaIdentificada").removeClass("hidden");    
            }
        }

        if ($("#denuncia_cuitCuilValido").val() == "N"){
            valid = false;
            $("#error_cuitCuilIdentificada").removeClass("hidden");
        }

        if($("#denuncia_tipoPersonaIdentificada_0").prop("checked")){
            if ($("#denuncia_nombreIdentificada").val() == ""){
                valid = false;
                $("#error_nombreIdentificada").removeClass("hidden");
            }
            if ($("#denuncia_apellidoIdentificada").val() == ""){
                valid = false;
                $("#error_apellidoIdentificada").removeClass("hidden");
            }
            if ($("#denuncia_ocupacionIdentificada").val() == ""){
                valid = false;
                $("#error_ocupacionIdentificada").removeClass("hidden");
            }
            var checked = false;
            $(".denuncia_sexo_identificada").each(function() {
                if ($(this).is(':checked')){
                    checked = true;
                }
            });
            if (checked == false){
                valid = false;
                $("#error_sexoIdentificada").removeClass("hidden");
            }

            checked = false;
            $(".denuncia_edad_identificada").each(function() {
                if ($(this).is(':checked')){
                    checked = true;
                }
            });
            if (checked == false){
                valid = false;
                $("#error_edadIdentificada").removeClass("hidden");
            }
        }

        if($("#denuncia_tipoPersonaIdentificada_1").prop("checked")){
            if ($("#denuncia_razonSocialIdentificada").val() == ""){
                valid   = false;
                $("#error_razonSocialIdentificada").removeClass("hidden");
            }
        }

        if ($("#denuncia_nacionalidadIdentificada").val() == ""){
            valid   = false;
            $("#error_nacionalidadIdentificada").removeClass("hidden");
        }
        if ($("#denuncia_paisIdentificada").val() == ""){
            valid   = false;
            $("#error_paisIdentificada").removeClass("hidden");
        }
        if (($("#denuncia_provinciaIdentificada option").length > 1) && ($("#denuncia_provinciaIdentificada").val() == "")){
            valid   = false;
            $("#error_provinciaIdentificada").removeClass("hidden");
        }
        if (($("#denuncia_partidoIdentificada option").length > 1) && ($("#denuncia_partidoIdentificada").val() == "")){
            valid   = false;
            $("#error_partidoIdentificada").removeClass("hidden");
        }
        if (($("#denuncia_localidadIdentificada option").length > 1) && ($("#denuncia_localidadIdentificada").val() == "")){
            valid   = false;
            $("#error_localidadIdentificada").removeClass("hidden");
        }
        $('html,body').animate({scrollTop: $("#tab5").offset().top}, 2000);
        if (valid){
            denunciaManager.toogleTabs("li-tab5");
            $('#rootwizard').find("a[href*='#tab5']").trigger('click');
        }
    },
   /* validarFecha: function(){ 
         var fecha = $("#denuncia_fechaHecho").val();
         alert('entra validarvalidar')
         $.ajax({    
            url: Routing.generate('validar_fecha'),
            type: 'post',
            data: {
                    fecha : fecha,
                },
                beforeSend: function(){
                    Pace.restart();
                },
                success: function (data, txt, jqXHR) {                        
                    if (jqXHR.status == 200) {  
                          return true;  
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                }
        });

    },*/

    confirmarDenuncia: function(){
        $("#error_descripcionHecho").addClass("hidden");
        //$("#error_fhecho").addClass("hidden");

        var valid = true;
        if ($("#denuncia_descripcionHecho").val() == ""){
            valid   = false;
            $("#error_descripcionHecho").removeClass("hidden");
        }
        /*var d = new Date();
        valid   = denunciaManager.validarFecha();
        alert("valid: "+valid);
        if (($("#denuncia_fechaHecho").val() != null) || ($("#denuncia_fechaHecho").val() != '')){
            alert('entra if');
            valid   = denunciaManager.validarFecha();
            if (!valid){
                $("#denuncia_fechaHecho").removeClass("hidden");
            }
        }*/
        
        if (valid){
            // hecho
            $("#c_hecho").html($("#denuncia_descripcionHecho").val());
            // fecha
            var fecha = $("#denuncia_fechaHecho").val();
            if (fecha == null | fecha == '') {
                $("#cc_fecha").addClass('hidden');
            } else {
                $("#cc_fecha").removeClass('hidden');
                $("#c_fecha").html(fecha);
            }

            // denunciado
            var denunciado = $("#denuncia_nombreDenunciado").val() + " " + $("#denuncia_apellidoDenunciado").val();
            if (denunciado == null | denunciado == '' | denunciado == ' ') {
                $("#cc_funcionario").addClass('hidden');
            } else {
                $("#cc_funcionario").removeClass('hidden');
                $("#c_funcionario").html(denunciado);
            }
            // dependencia
            var institucion = "";
            if ($("#denuncia_depIdDenunciado").val() != null & $("#denuncia_depIdDenunciado").val() != 'otro' & $("#denuncia_depIdDenunciado").val() != '') {
                institucion = $("#denuncia_depIdDenunciado option:selected").text();
            } else if ($("#denuncia_depOtro").val() != null) {
                institucion = $("#denuncia_depOtro").val();
            }
            if (institucion == null | institucion == '') {
                $("#cc_institucion").addClass('hidden');
            } else {
                $("#cc_institucion").removeClass('hidden');
                $("#c_institucion").html(institucion);
            }
            // funcion
            var funcion = $("#denuncia_funcionDenunciado option:selected").val();
            if (funcion == null | funcion == '') {
                $("#cc_funcion").addClass('hidden');
            } else {
                $("#cc_funcion").removeClass('hidden');
                $("#c_funcion").html($("#denuncia_funcionDenunciado option:selected").text());
            }


            
            // OTROS FUNCIONARIOS INVOLUCRADOS
            var cant = $("input[name='apellido[]']").length;
            if (cant > 0) {
                $("#otros_funcionarios").removeClass("hidden");
                var html = "<h3>Otros funcionarios involucrados</h3>";
                var nombres = $("input[name='nombre[]']").map(function(){return $(this).val();}).get();
                var apellidos = $("input[name='apellido[]']").map(function(){return $(this).val();}).get();
                var dependenciasId = $("select[name='dependencia[]']").map(function(){return $(this).val();}).get();
                var dependenciasValue = $("select[name='dependencia[]'] option:selected").map(function(){return $(this).text();}).get();
                var funcionesId = $("select[name='funcion[]']").map(function(){return $(this).val();}).get();
                var funcionesValue = $("select[name='funcion[]'] option:selected").map(function(){return $(this).text();}).get();
                    
                for (var i = 0; i < cant; i++) {
                    html += "<div class='row'>";
                    // funcionario
                    html += "<div class='col-md-4'>";
                    var funcionario = nombres[i] + ' ' + apellidos[i];
                    if (funcionario != "" & funcionario != " ") {
                        html += '<div><h6>Nombre y apellido del funcionario</h6><div class="input-group p-has-icon"><p>' + funcionario + '</p></div></div>';
                    }
                    html += "</div>";

                    // dependencia
                    html += "<div class='col-md-4'>";
                    var dependencia = (dependenciasId[i] != null & dependenciasId[i] != 'otro' & dependenciasId[i] != '') ? dependenciasValue[i] : ""; 
                    if (dependencia != "") {
                        html += '<div><h6>Institución donde se desempeña</h6><div class="input-group p-has-icon"><p>' + dependencia + '</p></div></div>';
                    }
                    html += "</div>";
                    // funcion
                    html += "<div class='col-md-4'>";
                    var funcion = (funcionesId[i] != null & funcionesId[i] != '') ? funcionesValue[i] : ""; 
                    if (funcion != "") {
                        html += '<div><h6>Función o cargo que desempeña</h6><div class="input-group p-has-icon"><p>' + funcion + '</p></div></div>';
                    }
                    html += "</div>";
                    // cierra la fila
                    html += "</div>";
                }  
                $("#otros_funcionarios").html(html);
            } else {
                $("#otros_funcionarios").addClass("hidden");
            }
            if ($("#dependencia").val() != null & $("#denuncia_depIdDenunciado").val() != 'otro' & $("#denuncia_depIdDenunciado").val() != '') {
                institucion = $("#denuncia_depIdDenunciado option:selected").text();
            } else if ($("#denuncia_depOtro").val() != null) {
                institucion = $("#denuncia_depOtro").val();
            }
            if (institucion == null | institucion == '') {
                $("#cc_institucion").addClass('hidden');
            } else {
                $("#cc_institucion").removeClass('hidden');
                $("#c_institucion").html(institucion);
            }
            // funcion
            var funcion = $("#denuncia_funcionDenunciado option:selected").val();
            if (funcion == null | funcion == '') {
                $("#cc_funcion").addClass('hidden');
            } else {
                $("#cc_funcion").removeClass('hidden');
                $("#c_funcion").html($("#denuncia_funcionDenunciado option:selected").text());
            }
            // FIN: OTROS FUNCIONARIOS INVOLUCRADOS


            // tipo 
            var tipo = $('input[class=denuncia_tipo]:checked').val();
            $("#c_tipo").html($('input[class=denuncia_tipo]:checked').next().next().find("label").html());
            // evidencia
			var evidencia = "";
            $("#denuncia_evidencia_list").children().each(function (index) { 
                evidencia += $(this).find("span[class*='MultiFile-title']").html() + "<br>";
            }); 
            if (evidencia != "") {
                $("#c_evidencia").html(evidencia);
                $("#cc_evidencia").removeClass("hidden");
            } else {
                $("#cc_evidencia").addClass("hidden");
            }
            
            var tipoTelefono = "";
            var telefono = "";
			var provincia = "";
            var partido = "";
            var localidad = "";
            if (tipo == "ANONIMA") {
                // oculta los campos de la identificada
                $("#cc_denunciante").addClass("hidden");
                $("#cc_cuil").addClass("hidden");
                // ocupacion
                $("#c_ocupacion").html($("#denuncia_ocupacionAnonima option:selected").text());
                // edad
                $("#c_edad").html($('input[class=denuncia_edad_anonima]:checked').next().next().find("label").html());
                // pais donde reside
                $("#c_pais_reside").html($("#denuncia_paisAnonima option:selected").text());
                // nacionalidad
                $("#c_nacionalidad").html($("#denuncia_nacionalidadAnonima option:selected").text());
                // genero
                $("#c_genero").html($('input[class=denuncia_sexo_anonima]:checked').next().next().find("label").html());
                // provincia
                if ($("#denuncia_provinciaAnonima").val() != null & $("#denuncia_provinciaAnonima").val() != '') {
                    provincia = $("#denuncia_provinciaAnonima option:selected").text();
                }
                // partido
                if ($("#denuncia_partidoAnonima").val() != null & $("#denuncia_partidoAnonima").val() != '') {
                    partido = $("#denuncia_partidoAnonima option:selected").text();
                }
                // localidad
                if ($("#denuncia_localidadAnonima").val() != null & $("#denuncia_localidadAnonima").val() != '') {
                    localidad = $("#denuncia_localidadAnonima option:selected").text();
                }
                // telefono
                if ($("#denuncia_tipoTelefonoAnonima").val() != null & $("#denuncia_tipoTelefonoAnonima").val() != ''
                    & $("#denuncia_codPaisTelefonoAnonima").val() != null & $("#denuncia_codPaisTelefonoAnonima").val() != '' 
                    & $("#denuncia_codAreaTelefonoAnonima").val() != null & $("#denuncia_codAreaTelefonoAnonima").val() != '' 
                    & $("#denuncia_numeroTelefonoAnonima").val() != null & $("#denuncia_numeroTelefonoAnonima").val() != '') {
                    tipoTelefono = $("#denuncia_tipoTelefonoAnonima option:selected").text();
                    telefono = "+" + $("#denuncia_codPaisTelefonoAnonima").val() + " (" + $("#denuncia_codAreaTelefonoAnonima").val() + ") " + $("#denuncia_numeroTelefonoAnonima").val();
                }
            } else {
                // edad
                $("#c_edad").html($('input[class=denuncia_edad_identificada]:checked').next().next().find("label").html());
                // ocupacion
                $("#c_ocupacion").html($("#denuncia_ocupacionIdentificada option:selected").text());
                // denunciante
                $("#cc_denunciante").removeClass("hidden");
                $("#c_denunciante").html($("#denuncia_nombreIdentificada").val() + " " + $("#denuncia_apellidoIdentificada").val());
                // cuil
                $("#cc_cuil").removeClass("hidden");
                $("#c_cuil").html($("#denuncia_cuitCuilIdentificada").val());
                // pais donde reside
                $("#c_pais_reside").html($("#denuncia_paisIdentificada option:selected").text());
                // nacionalidad
                $("#c_nacionalidad").html($("#denuncia_nacionalidadIdentificada option:selected").text());
                // genero
                $("#c_genero").html($('input[class=denuncia_sexo_identificada]:checked').next().next().find("label").html());
                // provincia
                if ($("#denuncia_provinciaIdentificada").val() != null & $("#denuncia_provinciaIdentificada").val() != '') {
                    provincia = $("#denuncia_provinciaIdentificada option:selected").text();
                }
                // partido
                if ($("#denuncia_partidoIdentificada").val() != null & $("#denuncia_partidoIdentificada").val() != '') {
                    partido = $("#denuncia_partidoIdentificada option:selected").text();
                }
                // localidad
                if ($("#denuncia_localidadIdentificada").val() != null & $("#denuncia_localidadIdentificada").val() != '') {
                    localidad = $("#denuncia_localidadIdentificada option:selected").text();
                }
                // telefono
                if ($("#denuncia_tipoTelefonoIdentificada").val() != null & $("#denuncia_tipoTelefonoIdentificada").val() != ''
                    & $("#denuncia_codPaisTelefonoIdentificada").val() != null & $("#denuncia_codPaisTelefonoIdentificada").val() != '' 
                    & $("#denuncia_codAreaTelefonoIdentificada").val() != null & $("#denuncia_codAreaTelefonoIdentificada").val() != '' 
                    & $("#denuncia_numeroTelefonoIdentificada").val() != null & $("#denuncia_numeroTelefonoIdentificada").val() != '') {
                    tipoTelefono = $("#denuncia_tipoTelefonoIdentificada option:selected").text();
                    telefono = "+" + $("#denuncia_codPaisTelefonoIdentificada").val() + " (" + $("#denuncia_codAreaTelefonoIdentificada").val() + ") " + $("#denuncia_numeroTelefonoIdentificada").val();
                }
            } 
            // provincia
            if (provincia != '') {
                $("#cc_provincia").removeClass("hidden");
                $("#c_provincia").html(provincia);
            } else {
                $("#cc_provincia").addClass("hidden");
            }
            // partido
            if (partido != '') {
                $("#c_partido").html(partido);
                $("#cc_partido").removeClass("hidden");
            } else {
                $("#cc_partido").addClass("hidden");
            }
            // localidad
            if (localidad != '') {
                $("#c_localidad").html(localidad);
                $("#cc_localidad").removeClass("hidden");
            } else {
                $("#cc_localidad").addClass("hidden");
            }
            // telefono
            if (tipoTelefono != '') {
                $("#c_telefono").html(tipoTelefono + ": " + telefono);
                $("#cc_telefono").removeClass("hidden");
            } else {
                $("#cc_telefono").addClass("hidden");
            }
            denunciaManager.toogleTabs("li-tab6");
            $('#rootwizard').find("a[href*='#tab6']").trigger('click');
        }
    },
    enviarDenuncia: function (){
        $("form[name='form_denuncia']").submit();
    },
    cleanTipoDenuncia: function (){
        $(".denuncia_tipo").each(function() {
            $(this).prop("checked", false);
        });
    },
    cambiarEstado: function() {
        clasificacionesId = null;
        if ($("#estadoDestinoId").val() == "CLASIFICADA") {
            clasificacionesId = $("select[name='clasificacion[]']").map(function(){return $(this).val();}).get();
        };
        $.ajax({   
            url: Routing.generate('generar_movimiento'),
            type: 'post',
            data: {
                denunciaId: $("#denunciaId").val(),
                estadoDestinoId : $("#estadoDestinoId").val(),
                clasificacionesId: clasificacionesId,
                fechaFiscalia: $("#fechaFiscalia").parent().find("input[type='hidden']").val(),
                motivoRechazo: $("#motivo_rechazo").val(),
                ipp: $("#ipp").val(),
                ufi: $("#ufi").val(),
                deptoJudicialUFI: $("#deptoJudicialUFI option:selected").val(),
                juzgadoGarantias: $("#juzgadoGarantias").val(),
                deptoJudicialJG: $("#deptoJudicialJG option:selected").val(),
                fechaElevacion: $("#fechaElevacion").parent().find("input[type='hidden']").val(),
                nroCausa: $("#nroCausa").val(),
                juzgadoCC: $("#juzgadoCC").val(),
                deptoJudicialJCC: $("#deptoJudicialJCC option:selected").val(),
                tipoSentencia: $("#tipoSentencia option:selected").val(),
                fechaSentencia: $("#fechaSentencia").parent().find("input[type='hidden']").val(),
                fechaApelacion: $("#fechaApelacion").parent().find("input[type='hidden']").val(),
                fechaIngresoUOI: $("#fechaIngresoUOI").parent().find("input[type='hidden']").val(),
                area: $("#area option:selected").val(),
                responsable: $("#responsable").val(),
                nroSumario: $("#nroSumario").val(),
                resolucion: $("#resolucion").val(),
                fechaResolucion: $("#fechaResolucion").parent().find("input[type='hidden']").val(),
            },
            success: function (data, txt, jqXHR) {    
                               location.reload();
                            },
        });
    }
}

    



