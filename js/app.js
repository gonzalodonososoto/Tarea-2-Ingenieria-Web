var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var celular = document.getElementById("celular");
var opinion = document.getElementById("opinion");
var mensaje = document.getElementById("mensaje");
var alertaTotal = document.getElementById("alertaTotal");


formulario.addEventListener("submit", function (evento) {
    var python = document.forms["formulario"]["python"].checked;
    var ts = document.forms["formulario"]["ts"].checked;    
    var cpp = document.forms["formulario"]["c2"].checked;
    var c = document.forms["formulario"]["c"].checked;    
    var php = document.forms["formulario"]["php"].checked;
    var ruby = document.forms["formulario"]["ruby"].checked;
    var java = document.forms["formulario"]["java"].checked;
    var r = document.forms["formulario"]["r"].checked;
    var groovy = document.forms["formulario"]["groovy"].checked;
    var go = document.forms["formulario"]["go"].checked;
    var swift = document.forms["formulario"]["swift"].checked;
    var kotlin = document.forms["formulario"]["kotlin"].checked;
    var rutValido = /^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
    var numeroValido = /^9\d{8}$/;
    var alerta = "";
    var datosValidos = true;

    evento.preventDefault();
    if (nombre.value.length == 0) {
        alerta += "Ingrese un nombre por favor.<br>";
        datosValidos = false;
    }
    if (rut.value.length == 0) {
        alerta += "Ingrese su rut por favor.<br>";
        datosValidos = false;
    }
    if (rut.value.length > 0 && !rutValido.test(rut.value)) {
        alerta += "El rut no tiene un formato valido.<br>";
        datosValidos = false;
    }
    if (correo.value.length == 0) {
        alerta += "Ingrese un correo por favor.<br>";
        datosValidos = false;
    }
    if (celular.value.length == 0) {
        alerta += "Ingrese un numero de telefono por favor.<br>";
        datosValidos = false;
    }
    if (celular.value.length > 0 && !numeroValido.test(celular.value)) {
        alerta += "Ingrese un numero de telefono valido por favor. (primer digito 9 mas 8 digitos)<br>";
        datosValidos = false;
    }
    if (!python && !ts && !cpp && !c && !php && !ruby && !java && !r && !groovy && !go && !swift && !kotlin) {
        alerta += "Seleccione al menos un lenguaje de programacion por favor.<br>";
        datosValidos = false;
    }
    if (descripcion.value.length == 0) {
        alerta += "Ingrese una breve descrpcion por favor.<br>";
        datosValidos = false;
    }
    if (!datosValidos) {
        alertaTotal.innerHTML = alerta;
    }
    if (datosValidos) {
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
        mensaje.style.color = "white";
    }

});
function limpiarDatos() {
    formulario.reset();
}