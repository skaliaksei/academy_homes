var innerNum = prompt('Введите число');
var addNum = prompt('Сколько прибавить?');
var minusNum = prompt('Сколько отнять?');
var multNum = prompt('На сколько умножить?');
var divNum = prompt('На сколько разделить?');

var outerNum = (Number(innerNum) + Number(addNum) - Number(minusNum)) * Number(multNum) / Number(divNum);

alert('Формула: (' + innerNum + ' + ' + addNum + ' - ' + minusNum + ') * ' + multNum + ' / ' + divNum + '\n' + 'Результат: ' + outerNum)