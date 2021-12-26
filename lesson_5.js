// Task 1
var num = 5,
    deg = 2.5;

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