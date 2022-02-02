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

// Task_5
var TEXT = "Lorem ipsum apple ut enim ad minima veniam, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem!"

function findRepeats(inputText) {
    // Разбиваем на массив слов
	var arrOfWords = inputText.split(/[\!\.\?\' '\,]/).filter(function(item) {
        return item.length > 0;
    });
	var objOfWords = [];

	for (var i = 0; i < arrOfWords.length; i++) {
		arrOfWords[i] = arrOfWords[i].toLowerCase();
	}

    for (var i = 0; i < arrOfWords.length; i++) {
        //Находим позицию в массиве объектов
        var currentPosition = findValueInArray(objOfWords, String(arrOfWords[i]));

        // Если такой уже есть в objOfWords, то увеличиваем повторение
        if (currentPosition != null) {
            objOfWords[currentPosition].repeats += 1;
        // Иначе, добавляем новый объект
        } else {
            objOfWords.push({value: String(arrOfWords[i]), repeats: 1})
        }
    }

    var mostPopularWord = findMostPopular(objOfWords);

    console.log('Максимальное число повторений у слова "' + mostPopularWord.value + '" - ' + mostPopularWord.repeats);
}

// Функция для поиска дубликатов
function findValueInArray(inputArray, inputValue) {
    var position = null;

    inputArray.forEach(function(item, i) {
        if (item.value === inputValue)
            position = i;
    });

    return position;
}

// Функция для поиска наиболее повторяемых слов в массиве объектов:
function findMostPopular(inputArr) {
    var mostPopularWord = {
        value: inputArr[inputArr.length - 1].value,
        repeats: inputArr[inputArr.length - 1].repeats
    };

    for (var i = (inputArr.length - 2); i >= 0; i--) {

        if (Number(inputArr[i].repeats) >= mostPopularWord.repeats) {
            mostPopularWord.value = inputArr[i].value;
            mostPopularWord.repeats = inputArr[i].repeats;
        }
    }

    return mostPopularWord;
}

findRepeats(TEXT);