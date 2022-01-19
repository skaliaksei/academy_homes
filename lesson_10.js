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
	if (!arguments.length)	return this.formatFoodAmount();
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

var barsik = new Cat('Barsik');
barsik.dailyNorm(61);
barsik.feed().stroke();
//---------------------------------------





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
