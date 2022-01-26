// ГЕТТЕРЫ - СЕТТЕРЫ
function Cat(name) {
    var self = this;

    self._name = name;
    self._example = 100;
    var age = 0;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.'
    }

    self.age = function(numberOfYears) {
        if (!arguments.length) return age;

        if (numberOfYears < 0 || numberOfYears > 20) {
            throw new Error('The item must be more than 0 and less then 20');
        }
        age = numberOfYears;
    }

    self.getAge = function() {
        console.log(age + ' лет')
    }

    self.feed = function() {
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

// this.__proto__ = animal

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

rabbit.__proto__.eats = 5;
console.log( rabbit.eats );

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