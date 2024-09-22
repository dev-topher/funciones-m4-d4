function validarCampo(input, errorElement, regex) {
    var valor = input.value.trim();
    var error = '';
    if (valor === '') {
        error = 'Este campo es obligatorio.';
    } else if (!regex.test(valor)) {
        error = 'El valor ingresado no es válido.';
    }
    errorElement.textContent = error;
    return error === '';
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var nombreInput = document.getElementById('nombre');
    var nombreError = document.querySelector('.errorNombre');
    var nombreRegex = /^[a-zA-Z\s]+$/; // Expresión regular para caracteres alfabéticos y espacios
    var nombreValido = validarCampo(nombreInput, nombreError, nombreRegex);

    var asuntoInput = document.getElementById('asunto');
    var asuntoError = document.querySelector('.errorAsunto');
    var asuntoValido = validarCampo(asuntoInput, asuntoError, /.+/);

    var mensajeInput = document.getElementById('mensaje');
    var mensajeError = document.querySelector('.errorMensaje');
    var mensajeValido = validarCampo(mensajeInput, mensajeError, /.+/); 

    if (nombreValido && asuntoValido && mensajeValido) {
        alert('¡Formulario enviado!');
    }
});