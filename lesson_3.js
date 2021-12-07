//Task 1
var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

// Task 2
for (var i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (var i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}