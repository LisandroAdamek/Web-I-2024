const formulario = document.getElementById("divFormulario");
const form = document.getElementById("formulario");
let nombre = document.getElementById("fnombre");
let apellido = document.getElementById("fapellido");
let mail = document.getElementById("fmail");
let pass = document.getElementById("fpass");
let pass2 = document.getElementById("fpass2");
let enviar = document.getElementById("boton");
const msg = document.getElementById("msgE");
const fn = document.getElementById("fn");
const fa = document.getElementById("fa");
const fm = document.getElementById("fm");
const fc = document.getElementById("fc");

const validacionMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validacionContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
let errores = 0;

function validacionDeDatos(){
    event.preventDefault();
    fn.classList.remove("error");
    fa.classList.remove("error");
    fm.classList.remove("error");
    fc.classList.remove("error");
    errores = 0;

    let txtNombre = nombre.value;
    let txtApellido = apellido.value;
    let txtMail = mail.value;
    let passw = pass.value;
    let passw2 = pass2.value;

    if(txtNombre.length == 0){
        fn.classList.add("error");
        document.getElementById("fnombre").placeholder="Debe introducir un nombre";
        errores += 1; 
    }

    if(txtApellido.length == 0){
        fa.classList.add("error");
        document.getElementById("fapellido").placeholder="Debe introducir un apellido";
        errores += 1;
    }

    if(!validacionMail.test(txtMail)){
        fm.classList.add("error");
        document.getElementById("fmail").placeholder = "Mail invalido, vuelva a intentarlo";
        errores += 1;
    }

    if(!validacionContraseña.test(passw)){
        fc.classList.add("error");
        document.getElementById("fpass").value = "";
        document.getElementById("herror").innerHTML = "*La contraseña debe tener mas de 6 caracteres y un numero"
        errores += 1;
    }

    if(passw !== passw2){
        fc.classList.add("error");
        document.getElementById("fpass2").value = "";
        document.getElementById("fpass2").placeholder = "Las contraseñas no son iguales";
        errores += 1;
    }

    if(errores < 1){
        formulario.style.display = "none";
        msg.style.display = "flex";
        return true;
    } else {
        return false; 
    }
}

form.addEventListener("submit", validacionDeDatos);

