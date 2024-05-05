function combine(
    input1: (number | string),
    input2: (number | string),
    resultConversion: 'as-text' | 'as-number'
) {
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        const result = +input1 + +input2;
        return result;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;

    /*if(resultConversion === 'as-number') {
        return +result;
    }else {
        return result.toString();
    }*/
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);

