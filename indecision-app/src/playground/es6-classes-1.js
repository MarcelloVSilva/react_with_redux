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

const me = new Person('Marcello Victor', 23);
console.log(me.getGretting(), me.getDescription());

const other = new Person();
console.log(other.getGretting(), other.getDescription());

