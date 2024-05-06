/*
class Department {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department): void {
        console.log(`Department ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

const accounting = new Department('Accounting')



accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

// accounting.employees[2] = 'Anna'; // This is not allowed because employees is private

accounting.name = 'NEW NAME'; // This is allowed because name is public

accounting.printEmployeeInformation();

console.log(accounting);
*/