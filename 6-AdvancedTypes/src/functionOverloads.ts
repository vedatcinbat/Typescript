/*
* type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// if b optional : function add(a: number): number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

//const result = add('Vedat', 'Cinbat') as string;

const result = add('Vedat', 'Cinbat');

result.split(' ');*/