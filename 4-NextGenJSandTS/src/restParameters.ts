/*
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies[0]);


// The spread operator
// Spread operator is used to split up array elements or object properties

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);


const person = {
    name: "Vedat",
    age: 22
};

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
    
}

or if we know that we will have 3 numbers, we can use this:

const add = (...numbers: [number, number, number]) => {
    
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
    
}

const addedNumbers = add(5, 10, 2);

console.log(addedNumbers);

*/