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