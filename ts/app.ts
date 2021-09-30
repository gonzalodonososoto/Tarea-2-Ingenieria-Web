let formulario:any=document.getElementById("formulario");

let nombre:any=document.getElementById("nombre");
let rut:any=document.getElementById("rut");
let correo:any=document.getElementById("correo");
let celular:any=document.getElementById("celular");
let opinion:any=document.getElementById("opinion");
let mensaje:any=document.getElementById("mensaje");
let alertaTotal:any=document.getElementById("alertaTotal")


formulario.addEventListener("submit",function(evento){
    let python:any=document.forms["formulario"]["python"].checked;
    let ts:any=document.forms["formulario"]["ts"].checked;
    let cpp:any=document.forms["formulario"]["cpp"].checked;
    let c:any=document.forms["formulario"]["c"].checked;
    let php:any=document.forms["formulario"]["php"].checked;
    let ruby:any=document.forms["formulario"]["ruby"].checked;
    let java:any=document.forms["formulario"]["java"].checked;
    let r:any=document.forms["formulario"]["r"].checked;
    let groovy:any=document.forms["formulario"]["groovy"].checked;
    let go:any=document.forms["formulario"]["go"].checked;
    let swift:any=document.forms["formulario"]["swift"].checked;
    let kotlin:any=document.forms["formulario"]["kotlin"].checked;
    let rutValido=/^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
    let numeroValido=/^9\d{8}$/;
    let alerta="";
    let datosValidos=true;
    
    evento.preventDefault();
    if(nombre.value.length==0){
        alerta+=`Ingrese un nombre por favor.<br>`;
        datosValidos=false;
    }
    if(rut.value.length==0){
        alerta+=`Ingrese su rut por favor.<br>`;
        datosValidos=false;
    }
    if(rut.value.length>0 && !rutValido.test(rut.value)){
        alerta+=`El rut no tiene un formato valido.<br>`;
        datosValidos=false;
    }
    if(correo.value.length==0){
        alerta+=`Ingrese un correo por favor.<br>`;
        datosValidos=false;
    }
    if(celular.value.length==0){
        alerta+=`Ingrese un número de teléfono por favor.<br>`;
        datosValidos=false;
    }
    if(celular.value.length>0 && !numeroValido.test(celular.value)){
        alerta+=`Ingrese un número de teléfono válido por favor. (primer digito 9 más 8 dígitos)<br>`;
        datosValidos=false;
    }
    if(!python && !ts && !cpp && !c && !php && !ruby && !java && !r && !groovy && !go && !swift && !kotlin){
        alerta+=`Seleccione al menos un lenguaje de programación por favor.<br>`
        datosValidos=false;
    }
    if(opinion.value.length==0){
        alerta+=`Ingrese una breve descrpción por favor.<br>`;
        datosValidos=false;
    }
    if(!datosValidos){
        alertaTotal.innerHTML=alerta;
    }
    if(datosValidos){
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";   
        mensaje.style.color="white";
    }
    
});


function limpiarDatos(){
    formulario.reset();
}