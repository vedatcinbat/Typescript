/*
class Department {
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
    }

    printEmployeeInformation() {
        console.log(this.employees);
    }

}

class ITDerpartment extends Department {
    public admins: string[];
    
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReports(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}




const itDept = new ITDerpartment('d1', ['Vedat'])
const accountingDept = new AccountingDepartment('d2', [])


itDept.addEmployee('Max');
itDept.addEmployee('Manu');

accountingDept.addReports('Something went wrong...');
accountingDept.printReports();

itDept.describe();

// itDept.employees[2] = 'Anna'; // This is not allowed because employees is private

itDept.name = 'NEW NAME'; // This is allowed because name is public

itDept.printEmployeeInformation();

console.log(itDept);



 */