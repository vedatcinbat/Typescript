type apiResponse = {
    data: string;
    status: number;
    date: Date;
    message: string;
}

const apiRes1: apiResponse = {
    data: 'Data from API',
    status: 200,
    date: new Date(),
    message: 'Success'

}

console.log('Sending data...')
console.log(apiRes1);