class Person {
    constructor(name = 'Sem nome', age = 0) {
        this.name = name
        this.age = age
    }
    getGretting() {
        return `E ai meu bom. Me chamo ${this.name}`
    }
    getDescription() {
        return `Tenho ${this.age} anos`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    getDescription() {
        return super.getDescription()
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation

    }
    getGretting(){
        return `Eu sou turista de${this.homeLocation}`
    }
}

const me = new Traveler('Marcello Victor', 23, 'Inhumas');
console.log({me});

const other = new Student();
console.log(other.getDescription());

