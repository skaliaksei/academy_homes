// Task 5
// var startRange = 2, //Начало диапазона
//     endRange = 10;  //Конец диапазона
// var arrSimpleNums = []; //Массив для простых чисел

// for (var i = startRange; i <= endRange; i++) {
//     if (checkSimple(i)) {
//         arrSimpleNums.push(i);
//     }
// }

// console.log(arrSimpleNums);
// console.log(outputString(arrSimpleNums));

// function checkSimple(num) { //функция проверки на простоту
//     var isSimple = true;

//     if(num > 1) {
//         for (var j = 2; j < num; j++) {
//             if (num % j == 0) {
//                 isSimple = false;
//             }
//         }
//     } else {
//         isSimple = false;
//     }

//     return isSimple;
// }

// function outputString(inputArray) {
//     var output = String(inputArray[0]);
//     for (var i = 1; i < inputArray.length; i++) {
//         output += ', ' + inputArray[i];
//     }

//     console.log(output);
// }


// function outer() {
//     var count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// let out1 = outer();
// let out2 = outer();

// out1();
// out1();
// out1();
// out2();
// out2();
// out1();
// out1();


//Recursion

// let t = 0;

// function recursion(t) {
//     if (t < 100) {
//         recursion(t += 1);
//     }
//     console.log(t);
// }

//recursion(t)



// Task 1
// С использованием цикла
// function sumTo(n) {
//     var output = 0;

//     for (var i = n; i > 0; i--) {
//         output += i;
//     }

//     return output;
// }

// console.log(sumTo(4));

// С использованием рекурсии
// function sumTo(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// or -->


// function sumTo(n) {
//     return (n == 1) ? n : n + sumTo(n - 1);
// }

// console.log(sumTo(10))

// // Task 2
// // Факториал
// function factorial(n) {
//     if (n > 1) {
//         return n * factorial(n - 1);
//     } else {
//         return n;
//     }
// }


// console.log(factorial(5));

// Task 3
//Числа Фибоначчи

// function fib(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// console.log(fib(50));



// -----------
// function counter(x) {
//     debugger;
//     if (x < 3) {
//         x++;
//         console.log(counter(x));
//     } else {
//         return x;
//     }
// }

// console.log(counter(1));


// -------------
// var num = 0;

// function f() {
//     if (1) {
//         num = true;
//     } else {
//        var num = false;
//     }

//     console.log(num);
// }

// f();

// ---------------
// var num = 0;

// function f() {
//     var num = 5;
//     console.log(num);
// }

// f();

// console.log(num);

// count = 0;


// function rec() {
//     //console.log(count++)
//     count++;

//     if (count < 10) {
//         rec();
//     }
//         return console.log(count);

// }

// rec();


// С использованием рекурсии
function sumToRecursion(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumToRecursion(n - 1);
    }
}

function sumToCycle(n) {
    var answer = 0;
    for (var i = n; i > 0; i--) {
        answer += i;
    }
    return answer;
}

function sumToProgression(n) {
    return ((1 + n) * n) / 2;
}

console.log(sumToRecursion(9));
console.log(sumToCycle(9));
console.log(sumToProgression(9));