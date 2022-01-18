// Task_3, Task_4, Task_5
function Animal(name) {
    var self = this;
    self._name = name;
    var foodAmount = 50;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    }

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        //Get:
        if(!arguments.length) return formatFoodAmount();

        //Set:
        if (amount < 50) {
            throw new Error('Значение не должно быть меньше 50');
        }
        if (amount > 100) {
            throw new Error('Значение не должно быть больше 100');
        }

        foodAmount = amount;
    }
}

function Cat() {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    }
}

// var barsik = new Cat('Barsik');
// barsik.dailyNorm(61);
// barsik.feed().stroke();

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log(this.name + ' Walking');
}

Cat.prototype = Object.create(Animal.prototype);

function Cat() {
    Animal.apply(this, arguments);
}

 Cat.prototype.sayMeow = function() {
    console.log(this.name + ' Meow ^_^');
}

var barsik = new Cat('Barsik');

barsik.sayMeow();
barsik.walk();




// PROTOTYPE
function Animal(legs) {
    var self = this;
    self.legs = 4;
};

Animal.prototype.walk = function() {
    console.log('Walking');
};

function Cat(name) {
    Animal.apply(this, arguments) //1 шаг
    this.name = name;
}

//Cat.prototype.__proto__ = Animal.prototype;
Cat.prototype = Object.create(Animal.prototype); //2 шаг
Cat.prototype.constructor = Cat; //3 шаг

Cat.prototype.sayMeow = function() {
    console.log('Meow');
};

Cat.prototype.walk = function() {
    Animal.prototype.walk.apply(this, arguments);
    this.sayMeow();
};

var barsik = new Cat('Barsik');
console.log(barsik.legs);


console.log(barsik instanceof Animal); //true