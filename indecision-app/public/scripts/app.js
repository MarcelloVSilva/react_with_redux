'use strict';

function add(x, y) {
    return x + y;
}

console.log(add(10, 2, 111));

var user = {
    name: 'Marcello',
    cities: ['Inhumas, Goiânia'],
    printCities: function printCities() {
        return this.cities.map(function (city) {
            return city;
        });
    }
};

console.log(user.printCities());

var multiplayer = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplayer.multiply());
