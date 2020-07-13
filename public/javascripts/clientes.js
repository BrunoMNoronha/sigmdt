const inputComplemento = document.querySelector('#inputComplemento');
const inputEndereco = document.querySelector('#inputEndereco');
const inputBairro = document.querySelector('#inputBairro');
const inputCidade = document.querySelector('#inputCidade');
const inputEstado = document.querySelector('#inputEstado');
const inputCep = document.querySelector('#inputCep');

function cepPromise() {
	const inputCepValue = document.querySelector('#inputCep').value;
	cep(inputCepValue).then(cep => {
		inputComplemento.removeAttribute('readonly', false);
		inputEndereco.removeAttribute('readonly', false);
		inputCep.classList.remove('is-invalid');
		inputBairro.value = cep.neighborhood;
		inputEndereco.value = cep.street;
		inputEstado.value = cep.state;
		inputCidade.value = cep.city;
	}, () => {
		inputComplemento.setAttribute('readonly', true);
		inputEndereco.setAttribute('readonly', true);
		inputCep.classList.add('is-invalid');
		inputComplemento.value = '';
		inputEndereco.value = '';
		inputBairro.value = '';
		inputCidade.value = '';
		inputEstado.value = '';
	})
}