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
    login;

(login === 'Вася') ? message = 'Привет' :
    (login === 'Директор') ? message = 'Здравствуйте' :
        (login === '') ? message = 'Нет логина' :
message = '';