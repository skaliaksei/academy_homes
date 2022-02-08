var wrapper = document.getElementsByClassName('wrapper')[0];
var container = document.getElementsByClassName('container')[0];
var xInput = container.lastElementChild.children[1];
var yInput = container.firstElementChild.children[1];
var btn = document.getElementsByTagName('button')[0];

// Создание контейнера для будущей доски:
var board = document.createElement('div');
wrapper.appendChild(board);
wrapper.lastChild.className = 'chess';

btnDisable();

function btnDisable() {
    btn.disabled = true;
    btn.style.color = '#969696';
}

function btnEnable() {
    btn.disabled = false;
    btn.style.color = '#000';
}

container.onkeyup = function() {
    if(xInput.value.length && yInput.value.length) {
        btnEnable();
    } else
        btnDisable();
};

btn.onclick = function() {
    var x = parseInt(xInput.value);
    var y = parseInt(yInput.value);

    if ((x > 0 && x < 10) && (y > 0 && y < 10)) {
        console.log('Validate !');
        createChess(x, y); // Создаем доску
        paintChess(x, y); // Закрашиваем доску
    } else {
        console.log('Value must be 1 - 9');
    }
}


function createChess(x, y) {

    if (board.childElementCount > 0)
        board.firstElementChild.remove(); // Удаляем предыдушую доску если она существует

    var table = document.createElement('table');
    board.appendChild(table);
    board.lastChild.className = 'table';
    table.border = '1';

    for (var i = 0; i < y; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < x; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

function paintChess(x, y) {
    var table = document.getElementsByClassName('table')[0];
    // console.log(table);
	var modeOfPaint = sessionStorage.getItem('mode');
	console.log('mode is: ' + modeOfPaint);

	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {

			if (modeOfPaint === 'positive') {
				if (i % 2 == j % 2) {
					table.children[j].children[i].style.backgroundColor = '#fff';
				} else {
					table.children[j].children[i].style.backgroundColor = '#000';
				}
				sessionStorage.setItem('mode', 'negative');
			} else {
				if (i % 2 !== j % 2) {
                    // console.log(tab);
					table.children[j].children[i].style.backgroundColor = '#fff';
				} else {
					table.children[j].children[i].style.backgroundColor = '#000';
				}
				sessionStorage.setItem('mode', 'positive');
			}

		}
	}

    table.onclick = function() {
        paintChess(x, y);
    }


}