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

console.log(firstPositive([-1, 0, 2, 34, -2]))




var person = {
    name: 'Aliaksei',
    age: 36,
    skills: {
        HTML: true,
        React: false
    },
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3]
};

var newPerson = {};

for (var key in person) {
    // console.log(person[key]);
    newPerson[key] = person[key];
}





















/**************************
 *******   BIND   *********
 *************************/

const girl = {
    user: 'Tania',
    getUser: function() {
        return this.user;
    }
}

var f1 = girl.getUser;
var f2 =  girl.getUser.bind(girl)  ;
// ------------------------------------
