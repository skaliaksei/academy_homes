// Task 1
var arrOfNames = ['Aliaksei', 'Sergei', 'Oleg', 'Eugenij', 'Alice', 'Alia', 'Alla', 'Elizaveta', 'Ekaterina'];

function createObj(inputArr) {
    return inputArr.map(function(item) {
        return { name: item };
    });
}

console.log(createObj(arrOfNames));

// Task 2
var inputArray = ['23', '34', '00'];

function showTime(inputArr) {
    var outputTime = '';

    inputArr.forEach(function(item) {
        outputTime += ' : ' + item;
    });

    return ('Текущее время') + outputTime;
}

console.log(showTime(inputArray));