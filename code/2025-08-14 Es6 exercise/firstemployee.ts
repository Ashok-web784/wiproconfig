// Define the Employee interface
interface Employee {
    empId: number;
    empName: string;
    salary: number;
}

// Function to print employees and return count
function printEmployees(employees: Employee[]): number {
    employees.forEach(emp => {
        console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
    });
    return employees.length;
}

// Create a list of employees
let employeeList: Employee[] = [
    { empId: 101, empName: "Ashok", salary: 50000 },
    { empId: 102, empName: "Ravi", salary: 60000 },
    { empId: 103, empName: "Priya", salary: 55000 }
];

// Call the function and get the count
let count = printEmployees(employeeList);
console.log("Total number of employees:", count);
