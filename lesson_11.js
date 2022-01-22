//Task_1
function filterNumbersArr(numbers) {
    var newArr = [];

    numbers.forEach(function(item, i) { //TODO
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
function areAnagrams(firstWord, secondWord) {
    var output = false;

    firstWord = firstWord.split('').sort().join('');
    secondWord = secondWord.split('').sort().join('');

    if (firstWord === secondWord)
        output = true;

    return output;
}

console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false

// Task_5
function divideArr(inputArr, divider) {
    var outputArr = [];

    for (var i = 0; i < Math.ceil(inputArr.length / divider); i++) {
        outputArr[i] = inputArr.slice(i * divider, (i * divider) + divider);
    }

    return outputArr;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 10);