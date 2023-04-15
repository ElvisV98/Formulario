var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

//function enviarformulario(){
//    console.log('enviando formulario...');


 //   error.innerHTML = mensajeserror.join(', ' );


 //   return false;
//}

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajeserror = [];

  if (nombre.value === null || nombre.value ===''){
      mensajeserror.push('Ingresa tu nombre');
    }
 
    if (password.value === null || password.value ===''){
        mensajeserror.push('Ingresa tu password');
    }

    error.innerHTML = mensajeserror.join(', ' );

    });