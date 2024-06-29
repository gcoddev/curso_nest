// const myName = 'Gary';
// const myAge = 2;
const suma = (a: number, b: number) => {
    return a + b;
}

console.log(suma(1, 2));

class Persona {
    // private age: number;
    // private name: string;

    constructor(private age: number, private name: string) {
        // this.age = age;
        // this.name = name;
    }

    getSummary() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }
};

const gary = new Persona(2, 'Gary');
gary.getSummary();
