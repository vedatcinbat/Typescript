/*const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {*/
const person = {
    name: "Vedat",
    age: 21,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];


console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()) // !!! ERROR !!!
}
