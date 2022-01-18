// PROTOTYPE
function Animal(legs = 4) {
    var self = this;
    self.legs = legs;
};

Animal.prototype.walk = function() {
    console.log('Walking');
};

function Cat(legs, name) {
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

var barsik = new Cat(3, 'Barsik');
console.log(barsik.legs);
console.log(barsik.name);


console.log(barsik instanceof Animal); //true