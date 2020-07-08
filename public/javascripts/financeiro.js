var dateControl = document.querySelectorAll('input[type="date"]');
var todayDate = new Date().toISOString().slice(0, 10);
dateControl.forEach(element => {
    element.value = todayDate;
});

function selectFilter() {
    var selected = $("#selectMovimentacao option:selected").val();
    var tr = document.querySelectorAll('#trMovimentacao');

    tr.forEach(element => {
        element.style.display = "";
    });

    tr.forEach(element => {
        var td = element.children[1].textContent
        if (td != selected && (selected)) {
            element.style.display = "none";
        }
    });
}