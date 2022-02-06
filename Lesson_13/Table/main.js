var table = document.getElementsByTagName('table')[0];
var tbody = table.firstElementChild;
var button = document.getElementsByClassName('button')[0];


button.onclick = function addRow() {
    var newRow = document.createElement('tr');
    var firstRow = table.firstElementChild.children[0];

    tbody.insertBefore(newRow, firstRow);
    newRow.innerHTML = '<td></td><td></td><td></td>';
};

tbody.onclick = function(e) {
    if (e.target.colSpan === 1) {
        var input = document.createElement('input');
        var ceilText = e.target.innerText;

        e.target.innerText = '';
        e.target.appendChild(input);
        input.value = ceilText;
        input.focus();

        // При потере фокукса над input
        input.onblur = function(e) {
            e.target.offsetParent.innerHTML = e.target.value;
        };

        // Событие при нажатии Enter
        input.onkeydown = function(e) {
            if(e.keyCode == 13) {
                input.blur();
            }
        };
    }
};