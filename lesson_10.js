// Task_1
function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

Animal.prototype.formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    //GET:
    if (!arguments.length)  return this.formatFoodAmount();
    //SET:
    if (amount < 50 || amount > 100) {
        throw new Error('Значение должно быть в диапазоне от 50 до 100');
    }
    this._foodAmount = amount;
    return 'Set complete';
};

function Cat(name) {
    Animal.apply(this, arguments);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

// var barsik = new Cat('Barsik');
// barsik.dailyNorm(61);
// barsik.feed().stroke();

// Task_2
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var initialObj2 = {
    name: 'Aliaksei',
    skills: {
        HTML: true,
        JS: true,
        React: false
    },
    skills: [7, 4, 9, 8]
}
var initialObj3 = {
    name: 'Aliaksei',
    skills: {
        HTML: true,
        JS: true,
        React: false
    },
    skills: [7, 4, 9, 8]
}

function isPrimitive(value) {
    var valueType = typeof(value);

    if (valueType === 'string' ||
        valueType === 'boolean' ||
        valueType === 'number' ||
        valueType === 'undefined' ||
        value == null) {
        return true;
    } else {
        return false;
    }
}

function deepClone(input) {
    var inputType = typeof input;

    if(isPrimitive(input)) {
        return input;
    } else if (Array.isArray(input)) {
        var newArr = [];

        for (var i = 0; i < input.length; i++) {
            newArr[i] = deepClone(input[i]);
        }

        return newArr;
    } else if (inputType === 'object') {
        var newObj = {};

        for (var key in input) {
            newObj[key] = deepClone(input[key]);
        }
        return newObj;
    } else if (inputType == 'function') {
        return input;
    }
}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Task_3
function isItPrimitive(input) {
    var inputType = typeof(input);

    return (
        inputType === "boolean",
        inputType === "number",
        inputType === "string",
        inputType === "undefined",
        input === null
    );
}

// console.log(isItPrimitive(null))

function check(input1, input2) {
    if (isItPrimitive(input1) && isItPrimitive(input2)) {
        return input1 === input2;
    }

    var input1type = typeof(input1);
    var input2type = typeof(input2);

    if (input1type !== input2type) {
        return false;
    }

    if (input1type === "object") {
        if (Object.keys(input1).length !== Object.keys(input2).length) {
            return false;
        }

        for (var key in input1) {
            if (!check(input1[key], input2[key])) {
                return false;
            }
        }
        return true;
    }

    if (Array.isArray(input1) && Array.isArray(input2)) {
        for (let index = 0; index < input1.length; index++) {
            if (!check(input1[index], input2[index])) {
                return false;
            }
        }
        return true;
    }

    return input1.toString() === input2.toString();
}

console.log(check(initialObj2, initialObj3))