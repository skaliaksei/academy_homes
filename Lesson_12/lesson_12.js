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