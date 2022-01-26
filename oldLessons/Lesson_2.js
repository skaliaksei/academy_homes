//Task 1
var innerNum = prompt('Введите число');
var addNum = prompt('Сколько прибавить?');
var minusNum = prompt('Сколько отнять?');
var multNum = prompt('На сколько умножить?');
var divNum = prompt('На сколько разделить?');

var outerNum = (Number(innerNum) + Number(addNum) - Number(minusNum)) * Number(multNum) / Number(divNum);

alert('Формула: (' + innerNum + ' + ' + addNum + ' - ' + minusNum + ') * ' + multNum + ' / ' + divNum + '\n' + 'Результат: ' + outerNum)

//Task 2
var entryData = prompt('Имя пользователя:', 'Админ');
var password;

if (!entryData) {
    alert('Вход отменен');
} else if (entryData === 'Админ') {
    password = prompt('Пароль:', 'Чёрный Властелин');
    if(!password) {
        alert('Вход отменен');
    } else if(password === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else {
        alert('Пароль неверен');
    }
} else {
    alert('Я вас не знаю');
}

//Task 3
var message,
    login = '';

message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';

//Task 4
var yourName,
    surname,
    patronymic,
    age,
    isMan;
var gender; //for store word value from boolean value
var isPension;

//Entering Surname data:
var emptyString = true;
while (emptyString) {
    surname = prompt('Enter your SURNAME:');

    //Validation Surname(empty string)
    if (surname) {
        emptyString = false;
    } else {
        alert('Error! Your Surname data can not be empty! Try again');
    }
}

//Entering Name data:
emptyString = true;
while (emptyString) {
    yourName = prompt('Enter your NAME:');

    //Validation Name(empty string)
    if (yourName) {
        emptyString = false;
    } else {
        alert('Error! Your Name can not be empty! Try again');
    }
}

//Entering Patronymic data:
emptyString = true;
while (emptyString) {
    patronymic = prompt('Enter your PATRONYMIC:');

    //Validation (empty string)
    if (patronymic) {
        emptyString = false;
    } else {
        alert('Error! Your Patronymic data can not be empty! Try again');
    }
}

//Entering AGE data:
emptyString = true;
while (emptyString) {
    age = Number(prompt('Enter your AGE:'));
    //Validation (empty string, letters, NaN):
    if (age) {
        //Validation (from 5 to 120):
        (age >= 5 && age <= 120) ? emptyString = false : alert('Error! Your Age can be from 5 to 120! Try again');
    } else {
        alert('Error! Your Age can not be empty and contain only letters or symbols. And it can be from 5 to 120! Try again');
    }
}

//Entering Gender data:
isMan = confirm('Are you a man?- Confirm with OK or press on the CANCEL:');
gender = (isMan) ? 'male' : 'female';

if (isMan) {
    isPension = (age >= 63) ? 'Yes' : 'No';
} else {
    isPension = (age >= 58) ? 'Yes' : 'No';
}

//Output Data:
alert ('Your Full name is: ' + surname + ' ' + yourName + ' ' + patronymic + '\n' + 'Now, your age is: ' + age + ' years\nor ' + age * 365 + ' days\nAfter 5 years your age is going to ' + (age + 5) + ' years\nGender: ' + gender +'\nNow you in a pension: ' + isPension);