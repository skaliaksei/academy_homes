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

//Task_2


