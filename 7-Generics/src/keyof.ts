/*
* function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}
*/

//console.log(extractAndConvert({name: 'Vedat'}, 'age')) // Error: Argument of type '"age"' is not assignable to parameter of type '"name"'
//console.log(extractAndConvert({name: 'Vedat'}, 'name')) // Value: Vedat