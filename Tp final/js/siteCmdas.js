function toggleMenu(){
   document.getElementById("sideBar").classList.toggle('active');
   document.getElementById("mainDiv").classList.toggle("active");
 }

function validarNum(){
	var re, nm, e;
	e = document.getElementById("txtInptPrecio");
	nm = document.getElementById("precio").value;
	re = /^\d*\.?\d+$/;
	if (re.test(nm)){
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

function validarNombre() {
	var e, nom;
	e = document.getElementById("txtInptNom");
	nom = document.getElementById("nombre").value;
	if ( nom == "" || nom.length > 40){
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
	}
	else{
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
}
function validarMoneda() {
	var e, mon;
	e = document.getElementById("txtInptMoneda");
	mon = document.getElementById("moneda").value;
	if ( mon == "" || mon.length > 10){
		e.classList.remove("txtInpt");
		e.classList.add("txtInptError");
		return 0;
	}
	else{
		e.classList.add("txtInpt");
		e.classList.remove("txtInptError");
		return 1;
	}
}
function validarTodo(){
	var frm;
	frm = document.getElementById("addc");
	if ( ( validarMoneda() + validarNombre() + validarNum() ) == 3 ){
		frm.submit();
	}
	else{
	}
}
function closeAdd(){
	var e, h, rst;
	e = document.getElementById("adicionar");
	h = document.getElementById("bg");
	e.classList.remove("active");
	h.classList.remove("act");
}
function openAdd(){
	var e, h;
	e = document.getElementById("adicionar");
	h = document.getElementById("bg");
	e.classList.add("active");
	h.classList.add("act");
}