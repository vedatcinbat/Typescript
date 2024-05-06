interface Greetable {
    name: string;

    greet(phase: string): void;
};

let user1: Greetable;

user1 = {
    name: 'Vedat',
    age: 22,
    greet(phase: string) {
        console.log(phase + ' ' + this.name);
    }
};

user1.greet('Hi there - I am'); // Hi there - I am Vedat
