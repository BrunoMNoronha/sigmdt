(function () {
  'use strict'

  feather.replace()

}())

const spanPrioridade = document.querySelectorAll('#span-prioridade');

spanPrioridade.forEach(element => {

  switch (element.textContent) {
    case 'baixa':
      element.className = 'badge badge-success';
      break;
    case 'media':
      element.className = 'badge badge-warning';
      break;
    case 'alta':
      element.className = 'badge badge-danger';
      break;
  }
  
});