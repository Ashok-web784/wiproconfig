// Function to print employees and return count
function printEmployees(employees) {
    employees.forEach(function (emp) {
        console.log("ID: ".concat(emp.empId, ", Name: ").concat(emp.empName, ", Salary: ").concat(emp.salary));
    });
    return employees.length;
}
// Create a list of employees
var employeeList = [
    { empId: 101, empName: "Ashok", salary: 50000 },
    { empId: 102, empName: "Ravi", salary: 60000 },
    { empId: 103, empName: "Priya", salary: 55000 }
];
// Call the function and get the count
var count = printEmployees(employeeList);
console.log("Total number of employees:", count);
