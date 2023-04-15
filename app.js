var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

//function enviarformulario(){
//    console.log('enviando formulario...');

//    var mensajeserror = [];

 //   if (nombre.value === null || nombre.value ===''){
 //       mensajeserror.push('engresa tu nombre');
 //   }
 //   if (password.value === null || password.value ===''){
 //       mensajeserror.push('engresa tu password');
 //   }

 //   error.innerHTML = mensajeserror.join(', ' );


 //   return false;
//}

var form = document.getElementById(formulario);
    form.addEventListener("submit", function(evt){
        evt.preventDefault();
        console.log('enviando formulario...');

    });