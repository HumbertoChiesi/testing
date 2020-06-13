function validarEmail(){
	var re,email,e;
	e = document.getElementById("txtInptEmail");
	email = document.getElementById("email").value;
	re = /\S+@\S+\.\S+/;
	if (re.test(email)){
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
	else{
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
	}
}

function validarTel(){
	var re, tel, e;
	e = document.getElementById("txtInptTel");
	tel = document.getElementById("telefono").value;
	re = /^[0-9]+$/;
	if (re.test(tel)){
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
	else{
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
		
	}
}
function validarNom(){
	var re, nom, e;
	e = document.getElementById("txtInptNom");
	nom = document.getElementById("nombre").value;
	re = /^[a-zA-Z][a-zA-Z\s]+$/;
	if (re.test(nom)){
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
	else{
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
		
	}
}
function validarPass(){
	var re, pass, e;
	e = document.getElementById("txtInptPass");
	pass = document.getElementById("pass").value;
	re = /^\w{3,14}$/;
	if (re.test(pass)){
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
	else{
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
	}
}

function validarTodo(){
	var frm;
	frm = document.getElementById("formulario");
	if ( (validarPass() + validarNom() + validarTel() + validarEmail() ) == 4){
		frm.submit();
		window.location.replace("../content/siteMain.html");
	}
	else{
	}
}
