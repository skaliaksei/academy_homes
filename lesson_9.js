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
var lola = new Cat('Lola');
barsik.feed();
barsik.dailyNorm(99);
console.log(barsik.dailyNorm());

lola.feed();
lola.dailyNorm(70);
console.log(lola.dailyNorm());