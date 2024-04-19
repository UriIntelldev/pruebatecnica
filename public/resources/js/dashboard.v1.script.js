$(document).ready(function() {

	$(".nav-item").click(function(event){
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.preventDefault();

		var enlace = "";
		var titulo = "";

		enlace = $(this).children(".nav-item-hold").attr('href');
		titulo = $(this).children(".nav-item-hold").children(".item-name").html();

		if( typeof titulo === "undefined"){
			titulo = $(this).children(".nav-item-hold").children(".nav-text").html();
		}

		if( enlace != '#'){
			$.ajax({
				url: enlace,
				type: "POST",
				cache: false,
				beforeSend: function() {
					$('.contenido').html("");
					$('#preloader').css('display','block');
				},
				success: function( data ) {
					$('.seleccionador').html('<li>'+titulo+'</li>');
					$('.titulo').html( titulo );
					$('.contenido').html( data );
				},
				complete: function() {
					$('#preloader').css('display','none');
					let div1 = document.querySelector('.sidebar-overlay');
					div1.classList.remove('open');
					let div2 = document.querySelector('.sidebar-left-secondary');
					div2.classList.remove('open');
					$("#comebacktome").css('display','none');
				},
				error: function( data, textStatus, jqXHR ) {
					$('.seleccionador').html('<li>'+titulo+'</li>');
					$('.titulo').html( titulo );
					$(".contenido").html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+enlace+'</span>: 404 <span style="text-transform: capitalize;">Not Found</span></h4>');
				}
			});
		}

		return true;
	});

	$("body").delegate(".href", "click", function(event){
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.preventDefault();

		$("body").undelegate(".href");

		let selectoring = false;
		var enlace	= $(this).attr('href');
		var titulo	= $(this).attr('titulo');

		if ( $(this).attr('atras_href') !== undefined ){
			var atras_href		= $(this).attr('atras_href');
			var atras_titulo	= $(this).attr('atras_titulo');
			selectoring 		= true;
		}

		$.ajax({
			url: enlace,
			type: "POST",
			method: "POST",
			cache: false,
			beforeSend: function() {
				$('.contenido').html("");
				$('#preloader').css('display','block');
			},
			success: function( data ) {
				$('.seleccionador').html('<li>'+titulo+'</li>');
				$('.titulo').html( titulo );
				$('.contenido').html( data );
			},
			complete: function() {
				$('#preloader').css('display','none');

				if ( selectoring ){
					$("#comebacktome").css('display','block');
					$("#comebacktomeatras").attr("href", atras_href);
					$("#comebacktomeatras").attr("titulo", atras_titulo);
				}else{
					$("#comebacktome").css('display','none');
				}

				if( $(".dropdown-menu").hasClass("show") || $(".dropdown widget_dropdown").hasClass("show") ){
					$(".dropdown-menu").removeClass('show');
					$("#dropdownMenuButton").removeClass('show');
				}
			},
			error: function( data, textStatus, jqXHR ) {
				$('.seleccionador').html('<li>'+titulo+'</li>');
				$('.titulo').html( titulo );
				$(".contenido").html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+enlace+'</span>: 404 <span style="text-transform: capitalize;">Not Found</span></h4>');
			}
		});

		return false;
	});
});




/*
* event: event
*/
function actionscript( event ){
	var laddaBtn					= event.currentTarget;
	var l							= Ladda.create(laddaBtn);
	l.start();

	setTimeout(function() {
		l.stop();
	}, 4000);
}


/*
* xType: 'error', 'success'
* xTitle: text
* xMessage: text 
*/
function msgBox( xType, xTitle, xMessage ){
	swal({
		title: xTitle,
		html: xMessage,
		type: xType,
		timer: 4000,
		showCancelButton: false,
		showConfirmButton: false
	}).catch(function(timeout) { });
}

/*
* id: #id
* url: url
* columnas: columns
* loader: function loader
* table_create
*/
function table_create( id, url1, columnas, numero, url2, tag, url3) {
	if ( $.fn.DataTable.isDataTable('#'+id) ) {
		$('#'+id).DataTable().clear().destroy();
	}

	if ( $.fn.DataTable.isDataTable('#'+id) ) {
		$('#'+id).dataTable().fnClearTable();
	}

	$('#'+id).DataTable({
		"language": { "url": base_url('/resources/js/spanish.json') },
		"processing": true, //Feature control the processing indicator.
		"serverSide": true, //Feature control DataTables' server-side processing mode.
		"aLengthMenu": [[10, 25, 50, 100, 200, 500], [10, 25, 50, 100, 200, 500]],
		"order": [[ 0, "desc" ]],
		ajax: {
			"url": url1,
			"type": "POST"
		},
		aoColumns: columnas,
		"fnCreatedRow" : function(nRow, oData, iDataIndex) {
			var ids					= $("td:eq(0)", nRow).html();
			var botones	 			= '';

			botones					+= '<div class="ul-bottom__line mb-3" style="display: inline-flex;">';
			botones					+= '	';

			if( ids !== '0' ){

				if( url2 != "..." ){
					if( url2.includes("editar") ){
						var link		= url2.replace('editar', 'ver') + ids;
					}else{
						var link 		= url2 + ids;
					}

					let atras_href = url1.replace('/getList','');
					botones			+= '	<button type="button" class="btn btn-outline-dark btn-icon m-1 href" href="'+link+'" titulo="Ver '+tag+'" atras_href="'+atras_href+'" atras_titulo="'+tag+'">';
					botones			+= '		<span class="ul-btn__icon"><i class="nav-icon i-Eye-Scan"></i></span>';
					botones			+= '	</button>';
				}

				if( typeof oData['status_estado'] == 'undefined' || oData['status_estado'] === '0' ){

					botones			+= '	';

					if( url2.includes("editar") ) {
						var link	= url2 + ids;
						let atras_href = url1.replace('/getList','');
						botones		+= '	<button type="button" class="btn btn-outline-success btn-icon m-1 href" href="'+link+'" titulo="Editar '+tag+'" atras_href="'+atras_href+'" atras_titulo="'+tag+'">';
						botones		+= '		<span class="ul-btn__icon"><i class="nav-icon i-Pen-2"></i></span>';
						botones		+= '	</button>';
					}

					botones		 += '	';

					if( url3 === '...' || typeof url3 === "undefined" ) {
						botones 	+= '';
					}else{
						botones		+= '	<button type="button" class="btn btn-outline-danger btn-icon m-1 data-deleted" data-id="'+ids+'">';
						botones		+= '		<span class="ul-btn__icon"><i class="nav-icon i-Close-Window"></i></span>';
						botones		+= '	</button>';
						botones		+= '	';
					}

				}
			}

			botones		 += '</div>';

			$("td:eq("+numero+")", nRow).html( botones );
		},
		"fnInitComplete": function(oSettings, json) {
			$('#'+id).delegate(".data-deleted", "click", function(event){
				event.stopImmediatePropagation();
				event.stopPropagation();
				event.preventDefault();
				var _id			= $(this).attr('data-id');

				swal({
					title: 'Eliminar Registro',
					text: "¿ Está Seguro de eliminar el Registro con ID " + _id + " ?" ,
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#0CC27E',
					cancelButtonColor: '#FF586B',
					confirmButtonText: 'Eliminar',
					cancelButtonText: 'Cancelar',
					confirmButtonClass: 'btn btn-success mr-5',
					cancelButtonClass: 'btn btn-danger',
					buttonsStyling: false
				}).then(function () {
					$.ajax({
						"url"		: url3,
						"type"		: "POST",
						"data"		: { "id" : _id },
						"dataType"	: "json",	
						"cache"	 : false,
						success: function( dato ) {
							if( dato.status === 'error'){
								msgBox( 'error', 'Eliminando!', dato.message );
							}
		
							if( dato.status === 'success'){
								msgBox( 'success', 'Registro Eliminado con éxito!', dato.message );
							}
						},
						complete: function() {
							$('#'+id).DataTable().ajax.reload();
						},
						error: function( data, textStatus, jqXHR ) {
							msgBox( 'error', 'Eliminando!', 'Ah ocurrido un error de conexión en su red. Reintente más tarde por favor.' );
						}
					});
		
				}, function (dismiss) {
				});
		
				return false;
			});

		}
	});

}

function table_creation( id, url1, columnas, numero, url3) {
	if ($.fn.DataTable.isDataTable("#"+id)) {
		$("#"+id).DataTable().clear().draw();
		$("#"+id).DataTable().destroy();
		$("#"+id+" thead").html('');
		console.log("tabla limpia");
	}

	$('#'+id).DataTable({
		"language"		: { "url": base_url('/resources/js/spanish.json') },
		"processing"	: true, //Feature control the processing indicator.
		"serverSide"	: true, //Feature control DataTables' server-side processing mode.
		"aLengthMenu"	: [[5, 10, 25, 50, 100, 200, 500], [5, 10, 25, 50, 100, 200, 500]],
		ajax: {
			"url"		: url1,
			"type"		: "POST"
		},
		aoColumns: columnas,
		"fnCreatedRow" 	: function(nRow, oData, iDataIndex) {
			var ids					= $("td:eq(0)", nRow).html();
			var botones	 = '';
		
			if( ids !== '0'){
				botones				+= '<div class="ul-bottom__line mb-3" style="display: inline-flex;">';
				botones				+= '	';

				if( url3 != "..." || url3 != "undefined" ) {
					botones			+= '	<button type="button" class="btn btn-outline-danger btn-icon m-1 data-deleted" data-id="'+ids+'">';
					botones			+= '		<span class="ul-btn__icon"><i class="nav-icon i-Close-Window"></i></span>';
					botones			+= '	</button>';
					botones			+= '	';
				}
				botones				+= '</div>';
			}
		
			$("td:eq("+numero+")", nRow).html( botones );
		},
		"fnInitComplete": function(oSettings, json) {
			$('#'+id).delegate(".data-deleted", "click", function(event){
				event.stopImmediatePropagation();
				event.stopPropagation();
				event.preventDefault();
				var _id			= $(this).attr('data-id');

				swal({
					title: 'Eliminar Registro',
					text: "¿ Está Seguro de eliminar el Registro con ID " + _id + " ?" ,
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#0CC27E',
					cancelButtonColor: '#FF586B',
					confirmButtonText: 'Eliminar',
					cancelButtonText: 'Cancelar',
					confirmButtonClass: 'btn btn-success mr-5',
					cancelButtonClass: 'btn btn-danger',
					buttonsStyling: false
				}).then(function () {
					$.ajax({
						"url"		: url3,
						"type"		: "POST",
						"data"		: { "id" : _id },
						"dataType"	: "json",	
						"cache"	 : false,
						success: function( dato ) {
							if( dato.status === 'error'){
								msgBox( 'error', 'Eliminando!', dato.message );
							}
		
							if( dato.status === 'success'){}
						},
						complete: function() {
							$('#'+id).DataTable().ajax.reload();
						},
						error: function( data, textStatus, jqXHR ) {
							msgBox( 'error', 'Eliminando!', 'Ah ocurrido un error de conexión en su red. Reintente más tarde por favor.' );
						}
					});
		
				}, function (dismiss) {
				});
		
				return false;
			});

		},
		drawCallback: function( settings ){
			if( typeof settings.json.total != 'undefined'){
				
				let percentageIVA = 0.16;
				if($("tfoot input").hasClass("percentageIVA")){
					percentageIVA = $("#percentageIVA").val();
				}

				var iva = ( settings.json.total * percentageIVA )
				var total = ( settings.json.total + iva );

				$('#subtotal').html(	Number.parseFloat( settings.json.total ).toFixed(2) );
				$('#tax').html( Number.parseFloat( iva ).toFixed(2) );
				$('#total').html( Number.parseFloat( total ).toFixed(2) );

				if($("tfoot tr th").hasClass("Btotales")){
					$('#subtotal.Btotales').html(	Number.parseFloat( settings.json.total ).toFixed(2) );
					$('#tax.Btotales').html( Number.parseFloat( iva ).toFixed(2) );
					$('#total.Btotales').html( Number.parseFloat( total ).toFixed(2) );
				}
			}
		}
	});

}

function table_refresh( id ){
	$( '#'+id ).DataTable().ajax.reload();
}

function save( id, url, title, url2 ){
	$.ajax({
		"url"		: base_url(url),
		"type"		: "POST",
		"data"		: $("#"+id).serialize(),
		"dataType"	: "json",	
		"cache"	 : false,
		success	 : function( dato ) {

			if( dato.status == 'error'){
				if( typeof dato.message == 'undefined'){

					$.each(dato, function(key, value) {
						if( value != ""){
							$('#' + key).addClass('is-invalid');
							$('#' + key).parents('.form-group').find('#error').html(value);
						}
					});

				}else{
					msgBox("error", "Salvataggio!", dato.message);
				}
			}

			if( dato.status == 'success'){
				msgBox("success", "Salvataggio!", dato.message);

				if( typeof url2 !== 'undefined'){
					setTimeout(function () {
						$.ajax({
							url: url2,
							type: "POST",
							cache: false,
							beforeSend: function() {
								$('.contenido').html("");
								$('#preloader').css('display','block');
							},
							success: function( data ) {
								$('#preloader').css('display','none');
								$("#comebacktome").css('display','none');
								$('.seleccionador').html('<li>'+title+'</li>');
								$('.titulo').html( title );
								$('.contenido').html( data );
							},
							error: function( data, textStatus, jqXHR ) {
								$('.seleccionador').html('<li> loader</li>');
								$('.titulo').html( 'loader' );
								$(".contenido").html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+url2+'</span>: 404 <span style="text-transform: capitalize;">Not Found</span></h4>');
							}
						});
					}, 4000);
				}
			}
		},
		error: function( data, textStatus, jqXHR ) {
			console.log(data);
			console.log(textStatus);
			console.log(jqXHR);
			msgBox( 'error', 'Salvataggio!', 'Si è verificato un errore di connessione sulla tua rete. Per favore riprova più tardi.' );
		}
	});
}

function savenomessage( id, url, title, url2 ){
	$.ajax({
		"url"		: base_url(url),
		"type"		: "POST",
		"data"		: $("#"+id).serialize(),
		"dataType"	: "json",	
		"cache"	 : false,
		success	 : function( dato ) {

			if( dato.status == 'error'){
				if( typeof dato.message == 'undefined'){

					$.each(dato, function(key, value) {
						if( value != ""){
							$('#' + key).addClass('is-invalid');
							$('#' + key).parents('.form-group').find('#error').html(value);
						}
					});

				}else{
					msgBox("error", "Salvataggio!", dato.message);
				}
			}

			if( dato.status == 'success'){
				if( typeof url2 !== 'undefined'){
					$.ajax({
						url: url2,
						type: "POST",
						cache: false,
						success: function( data ) {
							$('.seleccionador').html('<li>'+title+'</li>');
							$('.titulo').html( title );
							$('.contenido').html( data );
						},
						error: function( data, textStatus, jqXHR ) {
							$('.seleccionador').html('<li> loader</li>');
							$('.titulo').html( 'loader' );
							$(".contenido").html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+url2+'</span>: 404 <span style="text-transform: capitalize;">Not Found</span></h4>');
						}
					});
				}
			}

		},
		error: function( data, textStatus, jqXHR ) {
			msgBox( 'error', 'Salvataggio!', 'Si è verificato un errore di connessione sulla tua rete. Per favore riprova più tardi.' );
		}
	});
	
}

function table_creation2( id, url1, columnas, numero, url3) {
	if ($.fn.DataTable.isDataTable("#"+id)) {
		$("#"+id).DataTable().clear().draw();
		$("#"+id).DataTable().destroy();
		$("#"+id+" thead").html('');
		console.log("tabla limpia");
	}

	$('#'+id).DataTable({
		"language"		: { "url": base_url('/resources/js/spanish.json') },
		"processing"	: true, //Feature control the processing indicator.
		"serverSide"	: true, //Feature control DataTables' server-side processing mode.
		"aLengthMenu"	: [[5, 10, 25, 50, 100, 200, 500], [5, 10, 25, 50, 100, 200, 500]],
		ajax: {
			"url"		: url1,
			"type"		: "POST"
		},
		aoColumns: columnas,
		"fnCreatedRow" 	: function(nRow, oData, iDataIndex) {
			var ids					= $("td:eq(0)", nRow).html();
			var botones	 = '';
		
			if( ids !== '0'){
				botones				+= '<div class="ul-bottom__line mb-3" style="display: inline-flex;">';
				botones				+= '	';

				if( url3 != "..." || url3 != "undefined" ) {
					botones			+= '	<button type="button" class="btn btn-outline-danger btn-icon m-1 data-deleted" data-id="'+ids+'">';
					botones			+= '		<span class="ul-btn__icon"><i class="nav-icon i-Close-Window"></i></span>';
					botones			+= '	</button>';
					botones			+= '	';
				}
				botones				+= '</div>';
			}
		
			$("td:eq("+numero+")", nRow).html( botones );
		},
		"fnInitComplete": function(oSettings, json) {
			$('#'+id).delegate(".data-deleted", "click", function(event){
				event.stopImmediatePropagation();
				event.stopPropagation();
				event.preventDefault();
				var _id				= $(this).attr('data-id');
				var _id_assignment	= $('#id_edit').val();

				actionscript( event );

				swal({
					title: 'Eliminar Registro',
					text: "¿ Está Seguro de eliminar el Registro con ID " + _id + " ?" ,
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#0CC27E',
					cancelButtonColor: '#FF586B',
					confirmButtonText: 'Eliminar',
					cancelButtonText: 'Cancelar',
					confirmButtonClass: 'btn btn-success mr-5',
					cancelButtonClass: 'btn btn-danger',
					buttonsStyling: false
				}).then(function () {
					$.ajax({
						"url"		: url3,
						"type"		: "POST",
						"data"		: { "id" : _id, "id_assignment" : _id_assignment },
						"dataType"	: "json",	
						"cache"	 : false,
						success: function( dato ) {
							if( dato.status === 'error'){
								msgBox( 'error', 'Eliminando!', dato.message );
							}
		
							if( dato.status === 'success'){}

							if(dato.status == 'success_redirect'){

								msgBox( 'success', 'Registro Eliminado con éxito!', dato.message);
								
								setTimeout(function () {
									if( typeof dato.url !== 'undefined'){
										$.ajax({
											url: dato.url,
											type: "POST",
											cache: false,
											beforeSend: function() {
												$('.contenido').html("");
												$('#preloader').css('display','block');
											},
											success: function( data ) {
												$('#preloader').css('display','none');
												$('.seleccionador').html('<li>'+dato.title+'</li>');
												$('.titulo').html( dato.title );
												$('.contenido').html( data );
											},
											error: function( data, textStatus, jqXHR ) {
												$('.seleccionador').html('<li> loader</li>');
												$('.titulo').html( 'loader' );
												$(".contenido").html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+url2+'</span>: 404 <span style="text-transform: capitalize;">Not Found</span></h4>');
											}
										});
									}
								}, 4000);
							}
						},
						complete: function() {
							$('#'+id).DataTable().ajax.reload();
						},
						error: function( data, textStatus, jqXHR ) {
							msgBox( 'error', 'Eliminando!', 'Ah ocurrido un error de conexión en su red. Reintente más tarde por favor.' );
						}
					});
		
				}, function (dismiss) {
				});
		
				return false;
			});

		},
		drawCallback: function( settings ){
			if( typeof settings.json.total != 'undefined'){
				
				let percentageIVA = 0.16;
				if($("tfoot tr th input").hasClass("percentageIVA")){
					percentageIVA = $("#percentageIVA").val();
				}

				var iva = ( settings.json.total * percentageIVA )
				var total = ( settings.json.total + iva );

				$('#subtotal').html(	Number.parseFloat( settings.json.total ).toFixed(2) );
				$('#tax').html( Number.parseFloat( iva ).toFixed(2) );
				$('#total').html( Number.parseFloat( total ).toFixed(2) );

				if($("tfoot tr th").hasClass("Btotales")){
					$('#subtotal.Btotales').html(	Number.parseFloat( settings.json.total ).toFixed(2) );
					$('#tax.Btotales').html( Number.parseFloat( iva ).toFixed(2) );
					$('#total.Btotales').html( Number.parseFloat( total ).toFixed(2) );
				}
			}
		}
	});

}