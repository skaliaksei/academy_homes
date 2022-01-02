// Task 1
var testArr = [1, 3, -5, 7, -10, 7];

function deleteNegative(innerArray) {
    var outArray = [];
    var countOfSteps = 0;

    for (var i = 0; i < innerArray.length; i++) {
        if (innerArray[i] > 0) {
            outArray[countOfSteps] = innerArray[i];
            countOfSteps++;
        }
    }

    return outArray;
}

console.log(deleteNegative(testArr));

// Task_2
var names = {
    name_one: 'Vasya',
    name_two: 'Piotr',
    name_three: 'Fedya',
    name_four: 'Piotr',
    name_four2: 'Piotr',
    name_three2: 'Fedya',
}

console.log(names);

function edit(obj) {
    for (var key in obj) {
        obj[key] = obj[key].length;
        obj[key + '_length'] = obj[key];
        delete obj[key];
    }

    return obj;
}


function findDuplicates(entryObject) {
    var resultObject = {};


    for (var key in entryObject) {
        var countOfDuplicates = 0;

        for (var keyInner in entryObject) {
            if (entryObject[key] === entryObject[keyInner]) {
                countOfDuplicates += 1;
            }
        }

        console.log(entryObject[key] + ' : ' + countOfDuplicates);
    }

    return resultObject;
}

// console.log(findDuplicates(person));
// console.log(edit(names));
console.log(findDuplicates(names));