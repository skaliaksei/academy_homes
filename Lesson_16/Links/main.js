var container = document.getElementsByClassName('container')[0];
var firstParagraph = document.createElement('p');
var secondParagraph = document.createElement('p');
var button = document.getElementsByTagName('button')[0];

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
        var parsePath = JSON.parse(getPath).path

        alert(parsePath);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
        e.target.href = '#';
        console.log(e);

        alert('Link was be save.');
    }
}