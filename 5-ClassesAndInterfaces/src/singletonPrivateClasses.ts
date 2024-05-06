/*
abstract class Department {
    protected employees: string[] = [];
    static fiscalYear: number = 2020;

    constructor(protected readonly id: string, public name: string) {
    }

    abstract describe(this: Department): void;

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

    describe() {
        console.log('IT department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting department - ID: ' + this.id);
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


// const dept = new Department('d1', 'Accounting'); // This is not allowed because Department is abstract


const employee1 = Department.createEmployee('Vedat');
console.log(employee1);
console.log('FiscalYear: ' + Department.fiscalYear);

const itDept = new ITDerpartment('d1', ['Vedat'])
//const accountingDept = new AccountingDepartment('d2', [])
const accountingDept = AccountingDepartment.getInstance();
const accountingDept2 = AccountingDepartment.getInstance();

console.log(accountingDept, accountingDept2)

//accountingDept.mostRecentReport = 'Year End Report';



itDept.addEmployee('Max');
itDept.addEmployee('Manu');

accountingDept.mostRecentReport = 'Year End Report';

accountingDept.addReports('Something went wrong...');

console.log(accountingDept.mostRecentReport);

accountingDept.addEmployee('Max');
accountingDept.addEmployee('Vedat');
//accountingDept.printReports();
//accountingDept.printEmployeeInformation(); 
accountingDept.describe();

itDept.describe();

// itDept.employees[2] = 'Anna'; // This is not allowed because employees is private

itDept.name = 'NEW NAME'; // This is allowed because name is public

itDept.printEmployeeInformation();

console.log(itDept);
 */