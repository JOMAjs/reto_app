//<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->


$( window ).on( "load", function() {
  $("#loading-container").fadeOut(function() {
      //$(this).remove(); // optionsal if it's going to only be used once.
  });//
});

window.addEventListener("beforeunload", function (event) {
  $("#loading-container").fadeIn('slow');
});

/////////////////////////////////////////

var app = {};
xhrPool = [];
  app = {
    setConfirm: function(options) {
      $(".con").html(options.messaje);
      $( "#dialog-confirm" ).dialog({
        modal: true,
        height: "auto",
        width: 400,
        title: "Confirmacion",
        text: options,
        buttons: 
        [
          {
            text: "Aceptar",
            class: "btn btn-success",
            click: function() {
              $( this ).dialog( "close" );
               options =  $.extend({
                rutas: options,
                contenido: options,
                success: function() {},
                method: 'POST',
                url: '',
                data: {},
                dataType: 'json',
              },options);

              $.ajax({
                dataType: options.dataType,
                method:options.method,
                url:  options.url,
                data: options.data,
                beforeSend: function (jqXHR, settings) {
                  xhrPool.push(jqXHR);
                },
                success: function (data){
                  if (data.success == 1) {
                    app.Notificacion({tipo : 'success', mensaje: 'Se ha registrado correctamente'});
                  } else if(data.delete == 1){
                    app.Notificacion({tipo : 'success', mensaje: 'Se el eliminado correctamente'});
                  }
                  $(options.contenido).load(options.rutas);
                }
              })
              return false;
   
            }
            ////////////////////////////////////////////
          },
          {
            text: "Cancelar",
            class: "btn btn-danger",
            click: function() {
              $( this ).dialog( "close" );
              app.Notificacion({tipo : 'warning', mensaje: 'se ha cancelodo esta peticion'})
            }
          }
        ],
      });
		},
    Notificacion: function(options){
			 options = $.extend({
				tipo: '',
				mensaje:'Prueba de mensaje'
			}, options);
			$.toast({
				heading: 'Mensaje del sistema',
				text: options.mensaje,
				showHideTransition: 'slide',
				icon: options.tipo,
				position: 'top-right',
			});
		},
}

