/*
* function merge<T, U>(objA: T, objB: U) {
    // @ts-ignore
    return Object.assign(objA, objB);
}

const mergedObj =
    merge<{name: string, hobbies: string[]}, {age: number}>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log(mergedObj);
*/