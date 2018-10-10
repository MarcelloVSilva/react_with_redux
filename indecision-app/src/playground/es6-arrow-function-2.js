function add(x, y) {
    return x + y;
}

console.log(add(10, 2, 111))

const user = {
    name: 'Marcello',
    cities: ['Inhumas, Goiânia'],
    printCities() {
        return this.cities.map((city) => {
            return city
        })
    }
}

console.log(user.printCities())

const multiplayer = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        })
    }
}

console.log(multiplayer.multiply())