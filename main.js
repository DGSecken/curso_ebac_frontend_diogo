function Person(name) {
    this.name = name;
}

function Employee(name, salary) {
    this.salary = salary;
    Person.call(this, name);
}

function Dev(name, workload ) {
    this.workload = workload;
    Employee.call(this, name, "3000");
}

const Employee1 = new Employee("Jones", "12000");
const Developer1 = new Dev("Rupert", "8hrs");

console.log(Employee1);
console.log(Developer1);