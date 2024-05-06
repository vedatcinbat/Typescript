/*
class Department {
    /* private readonly id: string;
    public name: string; 
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        /* this.name = n;
        this.id = id; 
    }

    describe(this: Department): void {
        console.log(`Department (${this.id}) ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
        // this.id = 'd2'; // This is not allowed because id is readonly
    }

    printEmployeeInformation() {
        //console.log(this.employees.length);
        console.log(this.employees);
    }

}

const accounting = new Department('d1', 'Accounting')



accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

// accounting.employees[2] = 'Anna'; // This is not allowed because employees is private

accounting.name = 'NEW NAME'; // This is allowed because name is public

accounting.printEmployeeInformation();

console.log(accounting);

*/