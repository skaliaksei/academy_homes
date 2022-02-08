var container = document.getElementsByClassName('container')[0];
// var firstParagraph = document.createElement('p');
// var secondParagraph = document.createElement('p');
console.log(container);

var xInput = container.lastElementChild.children[1];
var yInput = container.firstElementChild.children[1];
var btn = document.getElementsByTagName('button')[0];

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
    } else {

    }
}


container.appendChild(firstParagraph);
firstParagraph.innerHTML = 'Some text <a href="#">Link 1</a><a href="#">Link 2</a>';

container.appendChild(secondParagraph);
secondParagraph.innerHTML = 'Some text <a href="http://google.com">Link 3</a><a href="http://yandex.ru">Link 4</a>';

button.onclick = function() {
    var length = firstParagraph.children.length;

    for (var i = 0; i < length; i++)
        firstParagraph.children[i].classList.toggle('changed');
};

secondParagraph.addEventListener('click', getLink);

function getLink(e) {
    e.preventDefault();

    // if (e.target.localName == 'a') {
    //     console.log(e.target.href);
    // }

    //Work with Local Storage:
    var key = String(e.target.innerHTML);
    var value = {};

    value.path = String(e.target.href);

    if (localStorage.getItem(String(e.target.innerHTML))) {
        var getPath = localStorage.getItem(e.target.innerHTML);
        var parsePath = JSON.parse(getPath).path;

        alert(parsePath);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
        e.target.href = '#';
        console.log(e);

        alert('Link was be save.');
    }
}




//--------------------------------------------------------
var table = document.createElement("table");
table.border = '1';
var x = 4;
var y = 5;



for (var i = 0; i < y; i++) {
    var tr = document.createElement('tr');
	
    for (var j = 0; j < x; j++) {
	
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
		
    }
	
    table.appendChild(tr);
}

whiteCeils = document.getElementsByClassName('white');

function paintChess() {
	var modeOfPaint = sessionStorage.getItem('mode');
	console.log('mode is: ' + modeOfPaint);
	
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
		
			if (modeOfPaint === 'positive') {
				if (i%2 == j%2) {
					table.children[j].children[i].style.backgroundColor = '#fff';
				} else {
					table.children[j].children[i].style.backgroundColor = '#000';
				}
				sessionStorage.setItem('mode', 'negative');
			} else {
				if (i%2 !== j%2) {
					table.children[j].children[i].style.backgroundColor = '#fff';
				} else {
					table.children[j].children[i].style.backgroundColor = '#000';
				}
				sessionStorage.setItem('mode', 'positive');
			}	

		}
	}
}

paintChess();


document.body.appendChild(table);

table.onclick = function() {
	paintChess();
}
