//Task 1
// var innerNum = prompt('Введите число');
// var addNum = prompt('Сколько прибавить?');
// var minusNum = prompt('Сколько отнять?');
// var multNum = prompt('На сколько умножить?');
// var divNum = prompt('На сколько разделить?');

// var outerNum = (Number(innerNum) + Number(addNum) - Number(minusNum)) * Number(multNum) / Number(divNum);

// alert('Формула: (' + innerNum + ' + ' + addNum + ' - ' + minusNum + ') * ' + multNum + ' / ' + divNum + '\n' + 'Результат: ' + outerNum)

//Task 2
// var entryData = prompt('Имя пользователя:', 'Админ');
// var password;

// if (!entryData) {
//     alert('Вход отменен');
// } else if (entryData === 'Админ') {
//     password = prompt('Пароль:', 'Чёрный Властелин');
//     if(!password) {
//         alert('Вход отменен');
//     } else if(password === 'Чёрный Властелин') {
//         alert('Добро пожаловать!');
//     } else {
//         alert('Пароль неверен');
//     }
// } else {
//     alert('Я вас не знаю');
// }

//Task 3
var message,
    login = '';

message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';


//Task 4
var name,
    surname,
    patronymic,
    age,
    isMan;
var gender; //for store word value from boolean value
var isPension;

//Entering Full Name data:
var emptyString = true;
while (emptyString) {
    surname = prompt('Enter your SURNAME:');
    name = prompt('Enter your NAME:');
    patronymic = prompt('Enter your PATRONYMIC:');

    //Validation (empty string)
    if (name && surname && patronymic) {
        emptyString = false;
    } else {
        alert('Error! Your Full Name data can not be empty! Try again');
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
    (age >= 63) ? isPension = 'Yes' : isPension = 'No';
} else {
    (age >= 58) ? isPension = 'Yes' : isPension = 'No';
}

//Output Data:
alert ('Your Full name is: ' + surname + ' ' + name + ' ' + patronymic + '\n' + 'Now, your age is: ' + age + ' years\nor ' + age * 365 + ' days\nAfter 5 years your age is going to ' + (age + 5) + ' years\nGender: ' + gender +'\nNow you in a pension: ' + isPension);