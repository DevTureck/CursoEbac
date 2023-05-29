const form = document.getElementById('formulario');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

function validaNumero(input1, input2) {
    var resultado = input1 > input2
    return resultado
}



form.addEventListener('submit', function (e) {
    var formValido = false
    e.preventDefault();

    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');

    formValido = validaNumero(input1.value, input2.value) === true
    if (formValido) {
        alert("O valor 1 é maior que o valor 2, tente novamente!")
    } else {
        alert("O valor 2 é maior que o valor 1, tudo certo!")
        input1.value = ''
        input2.value = ''
    }
})