$(document).ready(function () {
    mascaraInputValor("#inputValorEntrada");
    mascaraInputValor("#inputValorSaida");
    verificaSaldoNegativo();
    iniciaDataAtual();
});

function mascaraInputValor(input) {
    $(input).maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });
}

function iniciaDataAtual() {
    var dateControl = document.querySelectorAll('input[type="date"]');
    var todayDate = new Date().toISOString().slice(0, 10);
    dateControl.forEach(element => {
        element.value = todayDate;
        element.setAttribute('max', todayDate);
    });
}

function verificaSaldoNegativo() {
    var inputTotalCaixa = $('#total-caixa');
    if (inputTotalCaixa["0"].textContent.includes('-')) {
        inputTotalCaixa.addClass('text-danger');
    }
}

function dateFilter() {
    var tr = document.querySelectorAll('#trMovimentacoes');
    var selected = $("#selectMovimentacoes option:selected").val();
    var inputDataMin = $('#dataMin').val();
    var inputDataMax = $('#dataMax').val();
    var dataMin = new Date(inputDataMin);
    var dataMax = new Date(inputDataMax);

    tr.forEach(element => {
        element.style.display = "";
    });

    tr.forEach(element => {
        var elemetTdMovimentacao = element.children[1].textContent
        var elemetTdData = element.children[0].textContent
        var dtDataValue = new Date(elemetTdData);

        if (((dtDataValue < dataMin) || (dtDataValue > dataMax)) || (elemetTdMovimentacao != selected && (selected))) {
            element.style.display = "none";

        }
    });
}

// function selectFilter() {
//     var selected = $("#selectMovimentacoes option:selected").val();
//     var tr = document.querySelectorAll('#trMovimentacoes');

//     tr.forEach(element => {
//         element.style.display = "";
//     });

//     tr.forEach(element => {
//         var td = element.children[1].textContent
//         if (td != selected && (selected)) {
//             element.style.display = "none";
//         }
//     });
// }