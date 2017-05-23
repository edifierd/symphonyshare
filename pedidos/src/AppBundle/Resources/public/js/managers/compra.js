$(function() {
    var compraComercio = $("#compra_comercio"),
        compraFecha    = $("#compra_fecha"),
        compraProducto = $("#compra_producto"),
        compraBtnInit  = $("#compra_iniciar"),
        compraPedidos  = $("#tbody_pedidos"),
        compraCliente  = $("#compra_cliente"),
        compraCantidad = $("#compra_cantidad"),
        compraCompra   = $("#compra_compra");
     
    compraManager.init({
        compraComercio : compraComercio,
        compraFecha    : compraFecha,
        compraProducto : compraProducto,
        compraBtnInit  : compraBtnInit,
        compraPedidos  : compraPedidos,
        compraCantidad : compraCantidad,
        compraCompra   : compraCompra,
        compraCliente  : compraCliente
    });

    $("#compra_pedido").click(function(event) {
        event.preventDefault();
        compraManager.savePedido();
    });
});

var compraManager = {
    init: function(opt){
        this.opt = opt
    },  
    save: function(){
        var opt   = this.opt;
        var valid = true;
        if (opt.compraComercio.val() == ""){
            alert("Debe seleccionar un comercio.");
            valid = false;
        }
        if (opt.compraFecha.val() == ""){
            alert("Debe ingresar una fecha.");
            valid = false;
        }
        if (valid){
            $.ajax({    
                url: Routing.generate('compra_save'),
                type: 'post',
                data: {
                        comercio : opt.compraComercio.val(),
                        fecha    : opt.compraFecha.val()
                    },
                    success: function (data, txt, jqXHR) { 
                        if (jqXHR.status == 204) {
                            alert("Hay un problema con los datos solicitados.");
                        };
                        if (jqXHR.status == 200) {
                            opt.compraProducto.empty();
                            opt.compraComercio.prop("disabled", true);
                            opt.compraFecha.prop("disabled", true);
                            opt.compraBtnInit.prop("disabled", true);
                            opt.compraCompra.val(data.compraId);
                            
                            var productos = jQuery.parseJSON(data.productos);
                            $.each(productos, function(key, value) {
                                opt.compraProducto.append("<option value='"+value.id+"'>"+value.descripcion+"</option>");
                            });
                            opt.compraProducto.material_select();
                            alert("Compra Iniciada");
                        }
                    },
                    error: function(){
                        alert("Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                    }
            });
        }     
    },
    savePedido: function(){
        var opt   = this.opt;
        var valid = true;
        if (opt.compraCliente.val() == ""){
            alert("Debe seleccionar un cliente.");
            valid = false;
        }
        if (opt.compraProducto.val() == ""){
            alert("Debe seleccionar un producto.");
            valid = false;
        }
        if (opt.compraCantidad.val() == ""){
            alert("Debe ingresar una cantidad.");
            valid = false;
        }
        if (valid){
            $.ajax({    
                url: Routing.generate('compra_pedido_save'),
                type: 'post',
                data: {
                        compra   : opt.compraCompra.val(),
                        cliente  : opt.compraCliente.val(),
                        producto : opt.compraProducto.val(),
                        cantidad : opt.compraCantidad.val()
                    },
                    success: function (data, txt, jqXHR) { 
                        if (jqXHR.status == 204) {
                            alert("Hay un problema con los datos solicitados.");
                        };
                        if (jqXHR.status == 200) {
                            opt.compraCliente.val("");
                            opt.compraCliente.material_select();
                            opt.compraCantidad.val("");

                            var pedidos = jQuery.parseJSON(data.pedidos);
                            var html = "";
                            $.each(pedidos, function(key, value) {
                                var btnRemove = "<a href='#' onclick='compraManager.removePedido("+value.id+");'>Eliminar</a>";
                                html += "<tr><td>"+value.cliente.apellido+", "+value.cliente.nombre+"</td><td>"+value.producto.descripcion+"</td><td>"+value.cantidad+"</td><td>"+btnRemove+"</td></tr>";
                                
                            });
                            opt.compraPedidos.html(html);
                            
                            alert("Pedido Ok");
                        }
                    },
                    error: function(){
                        alert("Ha ocurrido un error. Por favor, vuelva a intentarlo.");
                    }
            });
        }        
    }
}


