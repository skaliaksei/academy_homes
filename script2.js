//Task 4
var name,
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
    name = prompt('Enter your NAME:');

    //Validation Name(empty string)
    if (name) {
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
alert ('Your Full name is: ' + surname + ' ' + name + ' ' + patronymic + '\n' + 'Now, your age is: ' + age + ' years\nor ' + age * 365 + ' days\nAfter 5 years your age is going to ' + (age + 5) + ' years\nGender: ' + gender +'\nNow you in a pension: ' + isPension);