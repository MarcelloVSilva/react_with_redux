function square(x) {
    return x * x;
}

console.log(square(3))

const squareArrow = (x) => x * x;

console.log(squareArrow(9))

const getFirstName = (_fullName) => _fullName.split(' ')[0]

const fullName = "Marcello Victor"
console.log(getFirstName(fullName))