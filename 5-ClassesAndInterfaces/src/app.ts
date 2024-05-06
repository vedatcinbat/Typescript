//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named { 
    //readonly name?: string;

    greet(phase: string): void;
};

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phase: string) {
        if(this.name) {
            console.log(phase + ' ' + this.name);
        }else {
            console.log('Hi');
        
        }
    }
}


let user1: Greetable;
let user2: Greetable;

user1 = new Person();
user2 = new Person('Vedat');
console.log(user1);

user1.greet('Hi there - I am'); // Hi
user2.greet('Hi there - I am'); // Hi there - I am Vedat