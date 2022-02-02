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

// Task 4
var STARTTEXT = "Привет, студент! Студент... Как дела, студент?";

function transformParagraph(inputText) {
    var outputArr = inputText.split(/[\!\.\?]/).filter(function(item) {
        return item.length > 0;
    }).map(function(item) {
        return item.trim();
    });

    outputArr.forEach(function(item) {
        var SYMBOLS = [' ', ','];
        var countOfSymbols = 0;

        for (var i = 0; i < item.length; i++) {
            if (SYMBOLS.indexOf(item[i]) >= 0)
                countOfSymbols++;
        }

        console.log(item + ': ' + (item.length - countOfSymbols));
    });
}

transformParagraph(STARTTEXT);

// Task_5 (не доделал)
var TEXT = "Lorem ipsum ut enim ad minima veniam, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem!"

function findRepeats(inputText) {
	var arrOfWords = inputText.split(/[\!\.\?\' '\,]/).filter(function(item) {
        return item.length > 0;
    });
	var objOfWords = [];
	
	for (var i = 0; i < arrOfWords.length; i++) {
		arrOfWords[i] = arrOfWords[i].toLowerCase();
	}
	
	for (var i = 0; i < arrOfWords.length; i++) {
		
		
	    var currentWordCount = objOfWords[arrOfWords[i]];
		var count = currentWordCount ? currentWordCount : 0;
		objOfWords[arrOfWords[i]] = count + 1;
	}
	
	//arrOfWords = arrOfWords.sort();
	
	console.log(objOfWords);
}

findRepeats(TEXT);
