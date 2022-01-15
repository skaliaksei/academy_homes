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

var barsik = new Cat('Barsik');
barsik.feed();
barsik.dailyNorm(99);
console.log(barsik.dailyNorm());

// Task_4
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
            throw new Error('More than 50, please');
        }
        if (amount > 100) {
            throw new Error('Less than 100, please');
        }

        foodAmount = amount;
    }
}

function Cat() {
    Animal.apply(this, arguments);

    var parentFeed = this.feed;
    this.feed = function() {
        parentFeed();
        console.log('Кот доволен ^_^');
    }
}

var barsik = new Cat('Barsik');
console.log(barsik._name);
barsik.feed();