var codigo_usuario = document.getElementById("codigo_usuario")
var nombre_usuario = document.getElementById("nombre_usuario")
var apellido_usuario = document.getElementById("apellido_usuario")
var correo_electronico = document.getElementById("correo_electronico")
var telefono_usuario = document.getElementById("telefono_usuario")
var direccion_usuario = document.getElementById("direccion_usuario")
var rol_usuario = document.getElementById("rol-usuario") 

function ValidarDatos(){
    if(nombre_usuario == '' || telefono_usuario == '' || correo_electronico == ''){
        console.log("Los campos estan vacios")
     }  
}

else{
    if(nombre_usuario != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    if (telefono_usuario.length() > 10) {
        console.log ("Los datos son incorrectos")
    }
    if(correo_electronico != /[@]/){
        console.log("Los datos son incorrectos")
    }
}