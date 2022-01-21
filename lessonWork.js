// var user = {
//     name: 'Aliaksei',
//     sayHi: function() {
//         console.log(this.name + ', Hi')
//     }
// }

// user.sayHi();

// user.sayHello = function() {
//     console.log('hello');
// };

// console.log(user)

// -------------
// ```
// function Cat(name, foodAmount) {
//     this.name = name;

//     this.formatFoodAmount = function(foodAmount) {
//         return foodAmount + 'гр.'
//     }
//     this.feed = function() {
//         console.log('Насыпаем в миску ' + formatFoodAmount(this.foodAmount)+ 'корма.');
//     }
// }

// var barsik = new Cat('Barsik', 50);
// ```

//-----------------------------------

function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.'
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + 'корма.');
    }
}

var barsik = new Cat('Barsik');
// barsik.feed();
//-----------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     function yearOfBirthday() {
//         // console.log(this.age);
//         return age;
//     }

//     this.sayHi = function() {
//         console.log(this.name + ', Hello!, ' + this.age);
//         console.log(yearOfBirthday());
//     }
// }

// var user = new Person('Aliaksei', 36);
// user.sayHi();
// var user2 = new Person('Tatiyana', 30);
// user2.sayHi();
//-----------------------------------
// function CoffeeMachine(power) {
//     this.waterAmount = 0; // количество воды в кофеварке

//     console.log( 'Создана кофеварка мощностью: ' + power + ' ватт' );

//     function interval() {
//         return power;
//     }

//     function writeRun() {
//         return console.log('Run!');
//     }

//     this.run = function() {
//         setTimeout(writeRun, interval());
//     }
// }



// var delonghi = new CoffeeMachine(900);
// delonghi.waterAmount = 1000;
// console.log('Changed to ' + delonghi.waterAmount + ' Watt');
// delonghi.run();

//-----------------------------------
// ГЕТТЕРЫ - СЕТТЕРЫ
function Cat(name) {
    this._name = name;
    this._example = 100;
    var age = 0;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.'
    }

    this.age = function(numberOfYears) {
        if (!arguments.length) return age;

        if (numberOfYears < 0 || numberOfYears > 20) {
            throw new Error('The item must be more than 0 and less then 20');
        }
        age = numberOfYears;
    }

    this.getAge = function() {
        console.log(age + ' лет')
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.')
    }

}

var barsik = new Cat('Barsik');
console.log(barsik._name);
// barsik.getAge();
barsik.age(10);
console.log(barsik.age());

// ФУНКЦИОНАЛЬНОЕ НАСЛЕДОВАНИЕ
function Siamic() {
    Cat.apply(this, arguments); //отнаследовать и передать параметры

    this.say = function() {

        console.log('Мяу!');
        console.log(this._example);
    }

    var parentFeed = this.feed; //Для полиморфизма
    this.feed = function() {
        parentFeed();
        console.log('Polimorfizm !') //Дополняем метод своей логикой
    }
}

var gendolf = new Siamic('Gendolf');
gendolf.say();
console.log(gendolf._name);
gendolf.feed();
// gendolf.age(2);
// console.log(gendolf.age());






Array.prototype.mirror = function() {
    var sum = 0;

    for (var i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}

var arr = [1, 2, 3];
arr.mirror();


