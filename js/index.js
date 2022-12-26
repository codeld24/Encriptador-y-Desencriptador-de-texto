/*Los ids a los que se les va a aplicar display: none/block */
const encriptador = document.getElementById("encriptador");
const desincriptadora = document.getElementById("desincriptadora");

/* Limpiar texto variable mandada por el evento onclick (idLimpiar)*/
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");

/*Copiar texto de la id mandada por el evento onclik (idCopy)*/
const resultadoEncriptar = document.getElementById("resultado-encriptado");
const resultadoDesencriptar = document.getElementById("resultado-desencriptado");

/* los id para mostrar mensaje de la AUTODESTRUCCION (info)*/
const autoDestruccionEn = document.getElementById("autoDestruccionEn");
const autoDestruccionDes = document.getElementById("autoDestruccionDes");

/*los id para ocultar o mostrar el resultado */
const encriptadoDisplay = document.getElementById('en');
const desencriptadoDisplay = document.getElementById('des');

/* variables para modificar los valores de la AutoDestruccion */
const segundos = 6000; // un 1000 segundo equivale a 1 segundo
const autoDestruccionMs = "El texto se ocultara en 60 segundos para mayor seguridad"

/* Libreria que se va a tener en cuenta para el challenge*/
const libreria =  /^[a-z ]+$/;

function limpiarTexto(idLimpiar){
    idLimpiar.value = '';
    idLimpiar.focus();
}

function copiarTexto(idCopy){
    idCopy.select();
    idCopy.setSelectionRange(0,99999);
    document.execCommand('copy');
}

function validacionLetras(e){
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key);

    if (libreria.test(tecla) == false ) {

        alert('Recuerde que no puede ingresar Mayúsculas, Caracteres Especiales, tampoco se permiten acentos');
        return false;
    }
}

function mostrarResultado(idLimpiar,idDisplay,info,ingreso){
    ingreso.className = "ocultar-ingreso";
    idDisplay.className = "mostrar-resultado";
   
    ocultarResultado(idLimpiar,idDisplay,info,ingreso);
}

function ocultarResultado(idLimpiar,idDisplay,info,ingreso){
    info.innerHTML = autoDestruccionMs;

    setTimeout(function(){
        idDisplay.className = "resultado";
        ingreso.className = "ingreso-texto";
        limpiarTexto(idLimpiar);
    }, segundos);
}

function encriptacion(){
    if(encriptar.value == ""){
        alert("primero ingrese un texto!!!");
        encriptar.focus();
    }else if (libreria.test(encriptar.value) == false ) {

        alert('Recuerde que no puede ingresar Mayúsculas, Caracteres Especiales, tampoco se permiten acentos');
        limpiarTexto(encriptar);
        
    }else{
        var textoEncriptado = encriptar.value.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        var textoEncriptado = textoEncriptado.replace(/''/img, "");

        resultadoEncriptar.innerHTML = textoEncriptado;
    
        mostrarResultado(encriptar,encriptadoDisplay,autoDestruccionEn,encriptador);
    }
}

function desencriptacion(){
    if(desencriptar.value == ""){
        alert("primero ingrese un texto!!!");
        desencriptar.focus();
    }else{

        var textoDesencriptado = desencriptar.value.replace(/enter/img, "e");
        var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
        var textoDesencriptado = textoDesencriptado.replace(/''/img, "");

        resultadoDesencriptar.innerHTML = textoDesencriptado;

        mostrarResultado(desencriptar,desencriptadoDisplay,autoDestruccionDes,desincriptadora);
    }
}

