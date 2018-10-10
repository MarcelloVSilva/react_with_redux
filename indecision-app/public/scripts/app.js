"use strict";

function square(x) {
    return x * x;
}

console.log(square(3));

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

var getFirstName = function getFirstName(_fullName) {
    return _fullName.split(' ')[0];
};

var fullName = "Marcello Victor";
console.log(getFirstName(fullName));
