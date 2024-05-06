/*
interface Named {
    readonly  name: string;
}

interface Greetable extends Named { 
    readonly name: string;

    greet(phase: string): void;
};

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phase: string) {
        console.log(phase + ' ' + this.name);
    }
}


let user1: Greetable;

user1 = new Person('Vedat');
//user1.name = 'Another'; // Cannot assign to 'name' because it is a read-only property
console.log(user1);

user1.greet('Hi there - I am'); // Hi there - I am Vedat
 */