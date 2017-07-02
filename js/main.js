function validateForm(){
}

$(document).ready(function(){
	$(".submit-btn").click(function(){
		if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,13})+$/.test($("#name").val()))){
   			$("#name").parent().append("<span>Ingrese un nombre con la primera letra en mayúscula.</span>");
  		}

  		if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,13})+$/.test($("#lastname").val()))){
   			$("#lastname").parent().append("<span>Ingrese un apellido con la primera letra en mayúscula.</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese un correo electrónico válido.</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese un correo electrónico válido.</span>");
  		}

  		if(($("#input-password").val() == "password") || ($("#input-password").val() == 123456) || ($("#input-password").val() == 098765) || (($("#input-password").val()).length < 5)){
  			$("#input-password").parent().append("<span>Ingrese una contraseña válida.</span>");
  		}

  		if($("select").val() === "0") {
   			$("select").parent().append("<span>Debe elegir una opción.</span>");
  		}	


  		$("#name").val("");
  		$("#lastname").val("");
  		$("#input-email").val("");
  		$("#input-password").val("");
  		$("select").val("0");  
  		$("#input-social").val(""); 
  		$("input:checkbox").val(""); 
  		$('input:checkbox[value=remember-me]').attr('checked',false);		  		
	});
});