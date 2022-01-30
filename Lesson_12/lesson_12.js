// Task 1
var arrOfNames = ['Aliaksei', 'Sergei', 'Oleg', 'Eugenij', 'Alice', 'Alia', 'Alla', 'Elizaveta', 'Ekaterina'];

function createObjects(inputArr) {
    return inputArr.map(function(item) {
        return { name: item };
    });
}

console.log(createObjects(arrOfNames));

// Task 2
var inputArray = ['23', '34', '00'];

function showTime(inputArr) {
    return inputArr.reduce(function(sum, current) {
        return sum + ' : ' + current;
    }, 'Текущее время');
}

console.log(showTime(inputArray));

// Task 3
var inputText = 'Lorem ipsum dolor sit';

function countVowels(inputStr) {
    var VOWELS = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;

    for (var i = 0; i < inputStr.length; i++) {
        if (VOWELS.indexOf(inputStr[i]) >= 0)
            count++;
    }

    return count;
}

console.log(countVowels(inputText)); // 7