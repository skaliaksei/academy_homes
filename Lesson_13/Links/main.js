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

    if (e.target.localName == 'a') {
        alert(e.target.href);
    }
}