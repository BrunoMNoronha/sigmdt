const inputCep = document.querySelector('#inputCep');
const inputEndereco = document.querySelector('#inputEndereco');
const inputBairro = document.querySelector('#inputBairro');
const inputCidade = document.querySelector('#inputCidade');
const inputEstado = document.querySelector('#inputEstado');

function cepPromise() {
    const inputCepValue = document.querySelector('#inputCep').value;
    cep(inputCepValue).then(cep => {
        inputCep.classList.remove('is-invalid')
        inputEndereco.value = cep.street;
        inputBairro.value = cep.neighborhood;
        inputCidade.value = cep.city;
        inputEstado.value = cep.state;
    }, () => {
        inputCep.classList.add('is-invalid')
        inputEndereco.value = '';
        inputBairro.value = '';
        inputCidade.value = '';
        inputEstado.value = '';
    })
}