var container = document.getElementsByClassName('container')[0];
var btn = container.children[0];
var arrayOfUsers = [];

btn.onclick = function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    xhr.onload = function() {
	    var statusType = +String(this.status)[0];

    	arrayOfUsers = (statusType === 2) ? JSON.parse(this.response).data : this.status;

        // Creating tabs after load:
        createTabs();
    };

};

function createTabs() {
    // Remove main area if it was create early:
    if (container.childElementCount > 1) {
        container.children[1].remove();
    }

    var card = document.createElement('div');
    container.appendChild(card);
    container.lastChild.className = 'area';

    var areaTabs = document.createElement('div');
    card.appendChild(areaTabs);
    card.lastChild.className = 'area__tabs';

    // Dinamic creating tabs:
    for (var i = 0; i < arrayOfUsers.length; i++) {
        var tab = document.createElement('div');

        areaTabs.appendChild(tab);
        areaTabs.lastChild.className = 'area__tab-item';
        tab.innerText = 'User ' + (i + 1);
    }

    // Set active class on the first tab:
    areaTabs.firstElementChild.className += ' active';
    createMainBlock(1);

    // Set active class on the target tab:
    areaTabs.onclick = function(e) {
        var target = e.target;
        var tabID = Number(target.innerText.slice(-1));
        // console.log(tabID);

        if (target.className === 'area__tab-item') {

            for (var i = 0; i < arrayOfUsers.length; i++) {
                if (areaTabs.children[i].className === 'area__tab-item active') {
                    areaTabs.children[i].classList.remove('active');
                }
            }

            target.className += ' active';

            // Create main block:
            createMainBlock(tabID);
        }
    };
}

function createMainBlock(id) {
    var card = container.children[1];

    // Remove main block if it was create early:
    if (card.childElementCount == 2)
        card.lastElementChild.remove();

    var mainBlock = document.createElement('div');
    card.appendChild(mainBlock);
    card.lastChild.className = 'area__content';

    // Insert content:
    var pathOfPhoto = arrayOfUsers[id - 1].avatar;
    console.log(pathOfPhoto);

    card.lastChild.innerHTML = '<div class="area__photo"></div><div class="area__personal-data"><span class="first-name">First Name: Aliaksei</span><span class="last-name">Last Name: Skakun</span></div>'

    // Insert photo:
    card.lastChild.children[0].innerHTML = '<img src=\"' + pathOfPhoto + '\" alt=\"photo\"></img>';

    // Insert name:
    card.lastChild.children[1].firstChild.innerHTML = '<span class=\"first-name\">First Name: ' + arrayOfUsers[id - 1].first_name + '</span>';

    // Insert surname:
    card.lastChild.children[1].lastChild.innerHTML = '<span class=\"last-name\">Last Name: ' + arrayOfUsers[id - 1].last_name + '</span>';
}