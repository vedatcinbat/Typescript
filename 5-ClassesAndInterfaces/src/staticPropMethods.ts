/*
class Department {
    protected employees: string[] = [];
    static fiscalYear: number = 2020;

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department): void {
        console.log(`Department (${this.id}) ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(name: string) {
        return {name: name}
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
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReports(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string){
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}



const employee1 = Department.createEmployee('Vedat');
console.log(employee1);
console.log('FiscalYear: ' + Department.fiscalYear);

const itDept = new ITDerpartment('d1', ['Vedat'])
const accountingDept = new AccountingDepartment('d2', [])

//accountingDept.mostRecentReport = 'Year End Report';



itDept.addEmployee('Max');
itDept.addEmployee('Manu');

accountingDept.mostRecentReport = 'Year End Report';

accountingDept.addReports('Something went wrong...');

console.log(accountingDept.mostRecentReport);

accountingDept.addEmployee('Max');
accountingDept.addEmployee('Vedat');
accountingDept.printReports();
accountingDept.printEmployeeInformation();

itDept.describe();

// itDept.employees[2] = 'Anna'; // This is not allowed because employees is private

itDept.name = 'NEW NAME'; // This is allowed because name is public

itDept.printEmployeeInformation();

console.log(itDept);
*/