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

console.log(sumTo(9));

// Task 3
var arrTest = [1, 2, [3, 4, [4]]];
var arr = [1, 2, 3, [4, 5, 6], [7, 8], 9, [10, [11, 12], 13]];
var arrHW = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, [0]],
    1, 8
];
var x = [1, 2, 3, [], [3]];

for (key in x) {
    console.log(key + ' : ' + !!x[key] + ' : ' + x[key].length);
}




function treeSum(arr) {
    var result = 0;

    for (key in arr) {
        if (arr[key]) {
            if (arr[key].length && arr[key].length > 0) {
                result += treeSum(arr[key]);
            } else if (arr[key] > 0) {
                result += arr[key];
            }
        }
    }

    return result;
}

console.log(treeSum(arrHW));