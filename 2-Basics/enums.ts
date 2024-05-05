/*
* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/
enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR = 'AUTHOR'

}

const person = {
    name: "Vedat",
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if(person.role === Role.AUTHOR){
    console.log('is author');
}

console.log(person);