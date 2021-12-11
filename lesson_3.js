//Task 1
var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

// Task 2
for (var i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (var i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}

// Task 3
var emptyObj = {};
var fullObj = {name: 'Aliaksei'};

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(emptyObj)); // true
console.log(isEmpty(fullObj));  // false

// Task 4
var storageArray = [];
var answer;

while (true) {
    answer = prompt('Введите число: ');

    if (answer === '0' || +answer) {
        storageArray.push(+answer);
    } else break;
}

function summArray(arr) {
    var summ = 0;

    for(var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }

    return summ;
}

alert(summArray(storageArray));

// Task 5
var startRange = 2,
    endRange = 10;
var count = 0;
var arrSimpleNumbers = [];

for (var i = startRange; i <= endRange; i++) {
     for (var j = (i - 1); j > 1; j--) {
        if (i % j == 0) {
            count++;
        }
    }

    if(count == 0) {
        arrSimpleNumbers.push(i);
    }
    count = 0;
}
console.log(arrSimpleNumbers)