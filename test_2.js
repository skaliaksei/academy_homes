/*************
 * TASK 1
 *************/
function Person(name, age) {
    var self = this;
    self.name = name;

    function getFormattedAge() {
        return age + ' лет.';
    }

    self.showInfo = function() {
        console.log('Привет, меня зовут ' + self.name + ', мне ' + getFormattedAge());
    };
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
    var PersonShowInfo = this.showInfo;

    this.showInfo = function() {
        PersonShowInfo();
        console.log('Моя зарплата ' + this.salary + '$');
    };
}

var person = new Employee('Вася', 20, 2000);

/*************
 * TASK 2
 *************/
function Person(name, age) {
    this._name = name;
    this._age = age;
}

Person.prototype._getFormattedAge = function() {
    return this._age + ' лет.';
};

Person.prototype.showInfo = function() {
    console.log('Привет, меня зовут ' + this._name + ', мне ' + this._getFormattedAge());
};

function Employee(name, age, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    Person.prototype.showInfo.call(this);
    console.log('Моя зарплата ' + this.salary + '$');
};

var person = new Employee('Вася', 20, 2000);