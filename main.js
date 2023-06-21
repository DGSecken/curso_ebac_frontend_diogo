function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, salary) {
    this.salary = salary;
    Person.call(this, name, age);
}

function Dev(name, age, workload ) {
    this.workload = workload;
    Employee.call(this, name, age, 3000);
}

const Employee1 = new Employee("Jones", 27, 4000);
const Developer1 = new Dev("Rupert", 23, "12hr");

console.log(Employee1);
console.log(Developer1);