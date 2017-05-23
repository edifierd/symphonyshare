$(function() {
    $('#div_bandeja_popup').modal();



$("#denuncia_form_cuitCuil").on('keyup', function(e){
        var self = $(this);
        if (self.val().length == 11){
            bandejaManager.validarCuitCuil(self);
        } else {
            $("#denuncia_cuitCuilValido").val("N");
        }
    });


});

//Manager para bandeja
var bandejaManager = {
	
    getHistorialEstados: function(denunciaId){
    //    var opt = this.opt;
       
        $.blockUI({ message: "<img width='100px' hight='100px' src=\'"+ $("#img_path").val() +"\'>", css: {
        border:     'none',
        backgroundColor:'transparent'
    } }); 
        $.ajax({    
            url: Routing.generate('historial_estados'),
            type: 'POST',
            data: {
                    denunciaId : denunciaId,
                },
                beforeSend: function(){
                    Pace.restart();
                },
                success: function (data, txt, jqXHR) {    
                    
                    if (jqXHR.status == 204) {
                    	$('#div_bandeja_popup').append("<tr><td><i class='fa fa-exclamation-triangle'></i> No existen movimientos para la denuncia seleccionada.</td></tr>");
                    };
                    if (jqXHR.status == 200) { 
                        $(".tap2").hide();
                        $(".tap1").hide();
                         $.unblockUI(); 
                        var data = jQuery.parseJSON(data);   
                        $('#div_bandeja_popup').empty(); 
                        var html = "";
                         //Get the current date
                         html = html + "<div class='container'>";
                        html = html + "<h5>Estados de la Denuncia #"+data[0].denuncia.id+"</h5>" ;                          
                        html = html + "<table class='responsive-table striped '>";
                        html = html + "<tr>"
                        html = html + "<th>Estado</th>";
                        html = html + "<th>Fecha de Movimiento</th>";
                        html = html + "</tr>";
                        $.each(data, function(key, value) {                                                   	                                                                                    
                           html = html + "<tr>";
                           html = html + "<td>"+value.estado.descripcion+"</td>";                                                       
                           html = html + "<td>"+moment(value.f_movimiento).format("DD-MM-YYYY")+"</td>";                                                       
                           html = html + "</tr>";
                        });
                        html = html + "</table>";
                        html = html + "<div class='container'>";
                        $('#div_bandeja_popup').append(html);
                        $('#div_bandeja_popup').modal('open');
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error al cargar los estados de la denuncia. Por favor, vuelva a intentarlo.");
                }
        });
    },



    uploadFileByTipoEvidencia: function(){
    //    var opt = this.opt;

    var formData = new FormData($("#form_uploadFileEvidencia")[0]);
    //var denuncia = $("#denunciaId");
    //tipoArchivo = $('#upload_file_evidenciatipoId').val();
   
      
            $.ajax({    
                    url: Routing.generate('upload_file_by_tipo'),
                    type: 'post',
                    processData: false,
                    contentType: false, 
                    data: formData?  formData: formData.serialize(),
                    success: function (data, txt, jqXHR) {                        
                       if (jqXHR.status == 204) {

                                alertify.error("<i class='fa fa-exclamation-triangle'></i> Hay un problema con los datos solicitados.");
                            };
                        if (jqXHR.status == 200) {
                            
                          
                        
                        //$('#div_content_upload_expediente').empty(); 
                        //var html = "El archivo"+data.evidencia.nombre+"se ah cargado correctamente";
                        //$('#div_content_upload_expediente').append(html);
                        $('#div_upload_expediente').modal('open');;
                            
                        }
                    },
                    error: function(){
                        alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                    }
            });
       
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
                            //$("#denuncia_form_nombresRatificado").val(result.data.nombre);
                            //$("#denuncia_form_apellidoRatificado").val(result.data.apellido);
                            /*$("#error_apellidoIdentificada").addClass("hidden");
                            $("#error_nombreIdentificada").addClass("hidden");
                            $("#denuncia_form_nombresRatificado").prop('checked', true);
                            $("#denuncia_tipoPersonaIdentificada_1").prop('checked', false);
                            $("#div_nombreIdentificada").show(); 
                            $("#div_apellidoIdentificada").show();
                            $("#div_razonSocialIdentificada").hide();
                            $("#div_x_juridica").show();
                            $("#div_ocupacionxjuridica").show();*/
                            bandejaManager.parsearNombre(result.data.nombre);
    
                        } else {
                            //$("#denuncia_cuitCuilValido").val("N");
                            $("#denuncia_form_nombresRatificado").val("");
                            $("#denuncia_form_apellidoRatificado").val("");
                            /*$("#denuncia_razonSocialIdentificada").val("");
                            $("#div_nombreIdentificada").hide(); 
                            $("#div_apellidoIdentificada").hide();
                            $("#div_razonSocialIdentificada").hide();
                            $("#error_cuitCuilIdentificada").removeClass("hidden");*/
                        }
                    }else{
                         $("#denuncia_form_nombresRatificado").val("");
                         $("#denuncia_form_apellidoRatificado").val("");
                    }
                },
                error: function (result) {
                    cuitCuil.attr('readonly', false);
                    $("#denuncia_cuitCuilValido").val("S");               
                }
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
        $("#denuncia_form_nombresRatificado").val(nom);
        $("#denuncia_form_apellidoRatificado").val(res[0]);
    },

    denunciasPorMes: function(){
    //    var opt = this.opt;
    var fecha = $("#fechaDenunciaPorMes").val();
    
        $.ajax({    
            url: Routing.generate('denuncias_por_mes'),
            type: 'post',
            data: {
                    fecha : fecha,
                },
                beforeSend: function(){
                    Pace.restart();
                },
                success: function (data, txt, jqXHR) {                        
                    if (jqXHR.status == 200) {  
                          alertify.error("<i class='fa fa-exclamation-triangle'></i> Se han subido correctamente los archivos.");  
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                }
        });
    },

    editarExpediente: function(denuncia){
        var nro_expediente = $("#denuncia_form_nroExpte").val();
    
        $.ajax({    
            url: Routing.generate('expediente_editar'),
            type: 'post',
            data: {
                    denunciaId : denuncia,
                    nroExp : nro_expediente,
                },
                beforeSend: function(){
                    Pace.restart();
                },
                success: function (data, txt, jqXHR) {                        
                    if (jqXHR.status == 200) { 
                         /*$('#div_nro_expte').empty();  
                         var nroExpte = nro_expediente.substring(0, 5)+"-"+
                                        nro_expediente.substring(5, 7)+"-"+
                                        nro_expediente.substring(12, 4)+"-"+
                                        nro_expediente.substring(16, 4)+"-"+
                                        nro_expediente.substring(-2);
                         $('#div_nro_expte').append("<b>Nro. Expediente: "+nroExpte+"</b>");*/
                         $('#div_edit_expediente_content').empty(); 
                         var html = "<b>Se ha editado correctamente el expediente.</b>";   
                         $('#div_edit_expediente_content').append(html);
                         $('#div_edit_expediente').modal('open');  
                    }
                },
                error: function(){
                    alertify.error("<i class='fa fa-exclamation-triangle'></i> Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                }
        });
    }
}//end bandeja manager


    



