// var testArr = [1, 3, -5, 7, -10, 7];

// function deleteNegative(innerArray) {
//     var outArray = [];
//     var countOfSteps = 0;

//     for (var i = 0; i < innerArray.length; i++) {
//         if (innerArray[i] > 0) {
//             outArray[countOfSteps] = innerArray[i];
//             countOfSteps++;
//         }
//     }

//     return outArray;
// }

// console.log(deleteNegative(testArr));


var testObject = {
    name: 'Aliaksei',
    surname: 'Skakun'
}

function transformObj(editableObject) {
    for (key in editableObject) {
        editableObject[key] = key.length;
    }

    for (var key in editableObject) {
        key = key + '_length';
    }

    return editableObject;
}

console.log(transformObj(testObject));