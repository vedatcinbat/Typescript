/*
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department): void {
        console.log(`Department ${this.name}`)
    }

}

const accounting = new Department('Accounting')

accounting.describe();

console.log(accounting);

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accountingCopy.describe(); // Department undefined
*/