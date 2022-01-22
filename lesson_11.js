//Task_1
function filterNumbersArr(numbers) {
    var newArr = [];

    numbers.forEach(function(item, i) {
        if (item > 0)
            newArr[newArr.length] = item;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Task_2
function firstPositive(arrOfNum) {
    var positiveNumber = arrOfNum.filter(findPositive);

    function findPositive(v) {
        return v > 0;
    }

    return positiveNumber[0];
}

console.log(firstPositive([-1, 0, 2, 34, -2]));

// Task_3
var word = ' ШалАш';

function isPalindrome(inputWord) {
    var output = false;
    inputWord = inputWord.trim().toLowerCase();
    var mirrorWord = inputWord.split('').reverse().join('');

    if (mirrorWord === inputWord)
        output = true;

    return output;
}

console.log(isPalindrome(word))

// Task_4
// TODO

// Task_5
// TODO