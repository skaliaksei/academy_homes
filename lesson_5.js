// Task 1
var num = 5,
    deg = 3;

if (deg > 0 && (deg % 1) == 0) {
    alert(pow(num, deg));
} else {
    alert('Для степени необходимо целое от 1 и выше')
}

function pow(x, n) {
    if (n > 1) {
        x *= pow(x, n - 1);
    }
    return x;
}

// Task 2
//Рекурсия
function sumTo(n) {
    if (n > 1) {
        return n + sumTo(n - 1);
    } else {
        return n;
    }
}

//Цикл
function sumTo(n) {
    var answer = 0;

    for (var i = n; i > 0; i--) {
        answer += i;
    }

    return answer;
}

//Прогрессия
function sumTo(n) {
    return ((1 + n) * n) / 2;
}

console.log(sumTo(1000));

//Самый быстрый способ (в данном случае)- с помощью формулы, т.к. все временные затраты
// приходятся на 3 арифметических действия. Более затратный (медленный) способ- обход диапазона
// с помощью цикла. Здесь основное время тратится на каждую итерацию цикла и линейно связано
// со значением, переданным в функцию. Самый времязатратный способ- рекурсия. Т.к. сначала тратим
// время на каждое её погружение с резервированием места в стеке под новую функцию, а потом ещё и на
// поочередный return по уровням с вычислением.
// Обработать данной рекурсивной функцией значение 100000 не получается из за ограниченности памяти
// стека и его переполнения.

// Task 3
var arrHW = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(arr) {
    var result = 0;

    for (key in arr) {
        if (arr[key]) {
            if (arr[key].length && typeof(arr[key]) != 'string') { //Значение иимеет длину и это не строка
                result += treeSum(arr[key]);
            } else if (typeof(arr[key]) == 'number') { //Значение- числовое
                result += arr[key];
            }
        }
    }

    return result;
}

console.log(treeSum(arrHW));