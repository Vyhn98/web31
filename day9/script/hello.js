function add(a, b) {
    let result = a + b;
    console.log(a + "+" + b + "=" + result);
}
add(20, 25);

function sub(a, b) {
    let result = a - b;
    console.log(a + "-" + b + "=" + result)
}
sub (40, 12);

function mul(a, b) {
    let result = a * b;
    console.log(a + "*" + b + "=" + result);
}
mul(10, 120);

function div(a, b) {
    let result = a / b;
    console.log(a + ":" + b + "=" + result);
}
div(100, 2);

const currentYear = 2022;

function calcAge(yearOfBirth) {
    let age = currentYear - yearOfBirth;
    console.log(age);
}
calcAge(1998);
