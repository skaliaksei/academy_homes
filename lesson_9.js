// Task 3
function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    }

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        //Get:
        if(!arguments.length) return formatFoodAmount();

        //Set:
        if (amount < 50) {
            throw new Error('More than 50, please');
        }
        if (amount > 100) {
            throw new Error('Less than 100, please');
        }

        foodAmount = amount;
    }
}

// Task_4, Task_5
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

var barsik = new Cat('Barsik');
barsik.dailyNorm(61);
barsik.feed().stroke();