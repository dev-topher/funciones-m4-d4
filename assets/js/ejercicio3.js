var valor1Input = document.getElementById('valor1');
var valor2Input = document.getElementById('valor2');
var resultadoSpan = document.querySelector('.resultado');
var btnSumar = document.getElementById('btn-sumar');
var btnRestar = document.getElementById('btn-restar');

function sumar() {
    var valor1 = parseFloat(valor1Input.value);
    var valor2 = parseFloat(valor2Input.value);
    var resultado = valor1 + valor2;
    resultadoSpan.textContent = resultado;
}

function restar() {
    var valor1 = parseFloat(valor1Input.value);
    var valor2 = parseFloat(valor2Input.value);
    var resultado = valor1 - valor2;
    if (resultado < 0) {
        resultadoSpan.textContent = '0';
    } else {
        resultadoSpan.textContent = resultado;
    }
}

btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);