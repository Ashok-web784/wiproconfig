let employees = [
    { name: "Ashok", role: "Manager", empId: 101, salary: 60000 },
    { name: "Vishnu", role: "QA", empId: 102, salary: 35000 },
    { name: "Rahul", role: "Developer", empId: 103, salary: 40000 },
    { name: "Kiran", role: "Manager", empId: 104, salary: 65000 },
    { name: "Priya", role: "Developer", empId: 105, salary: 42000 }
];

let totalManagerSalary = employees
    .filter(emp => emp.role === "Manager")
    .reduce((total, emp) => total + emp.salary, 0);

console.log(totalManagerSalary);