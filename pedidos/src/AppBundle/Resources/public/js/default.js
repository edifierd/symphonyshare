$( document ).ready(function() {
    
    $(document).ajaxError(function (event, jqXHR) {
        if (408 === jqXHR.status) {
            window.location.reload();
        }
    });

    
    alertify.defaults = {
            // dialogs defaults
            modal:true,
            basic:false,
            frameless:false,
            movable:true,
            moveBounded:false,
            resizable:true,
            closable:true,
            closableByDimmer:true,
            maximizable:true,
            startMaximized:false,
            pinnable:true,
            pinned:true,
            padding: true,
            overflow:true,
            maintainFocus:true,
            transition:'zoom',
            autoReset:true,

            // notifier defaults
            notifier:{
                // auto-dismiss wait time (in seconds)  
                delay:5,
                // default position
                position:'top-right'
            },

            glossary:{
                title:'Atención',
                ok: '<i class="fa fa-check" aria-hidden="true"></i> Aceptar',
                cancel: '<i class="fa fa-times" aria-hidden="true"></i> Cancelar',
                acccpt: '<i class="fa fa-check" aria-hidden="true"></i> Aceptar',
                deny: 'Cancelar',
                confirm: '<i class="fa fa-check" aria-hidden="true"></i> Confirmar',
                decline: '<i class="fa fa-times" aria-hidden="true"></i> Cancelar',
                close: '<i class="fa fa-times" aria-hidden="true"></i> Cerrar',
                maximize: 'Maximizar',
                restore: 'Restaurar',
            },

            // theme settings
            theme:{
                // class name attached to prompt dialog input textbox.
                input:'form-control input-prompt',
                // class name attached to ok button
                ok:'btn btn-primary btn-sm btn-flat',
                // class name attached to cancel button 
                cancel:'btn btn-danger btn-sm btn-flat'
            }
        };    

    $('form').bind('submit', function() { 
        var btnSave = $(this).find('button[type="submit"]');     
    });   
    
    $('a[data-toggle="tab"]').on('click', function(){
        if ($(this).parent('li').hasClass('disabled')) {
            return false;
        };
    });
    
    /*inicializa los selects*/
      $('select').material_select();
});

 
  
   $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year

  monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
  weekdaysShort: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'Sab'],
  weekdaysLetter: [ 'D', 'L', 'M', 'Mi', 'J', 'V', 'S' ],
  formatSubmit: 'dd-mm-yyyy',
  today: 'Hoy',
  clear: 'borrar',
  close: 'Cerrar'
   });