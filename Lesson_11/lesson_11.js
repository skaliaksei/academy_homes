//Task_1
function filterNumbersArr(numbers) {
    return numbers.filter(function(el) {
        return el > 0;
    });
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Task_2
function firstPositive(arrOfNum) {
    return arrOfNum.find(function(item) {
		return item > 0;
	});
}

console.log(firstPositive([-1, 0, 1, 34, -2]));

// Task_3
function isPalindrome(inputWord) {
	return inputWord.trim().toLowerCase().split('').reverse().join('') === inputWord.trim().toLowerCase();
}

console.log(isPalindrome('ШалАш'));

// Task_4
function areAnagrams(firstWord, secondWord) {
    return firstWord.trim().toLowerCase().split('').sort().join('') === secondWord.trim().toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false

// Task_5
// With slice()
function divideArr(inputArr, divider) {
    var outputArr = [];

    for (var i = 0; i < Math.ceil(inputArr.length / divider); i++) {
        outputArr[i] = inputArr.slice(i * divider, (i * divider) + divider);
    }

    return outputArr;
}

// With splice()
function divideArr2(inputArr, divider) {
    var outputArr = [];

    while(inputArr.length)
        outputArr.push(inputArr.splice(0, divider));

    return outputArr;
}

console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(divideArr2([1, 2, 3, 4, 5, 6, 7, 8], 3));