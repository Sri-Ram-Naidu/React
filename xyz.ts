class Emp
 {
    name;
    age;c
    salary;
    designation;
    constructor(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    displayDetails() {
        return this.name + " " + this.age + " " + this.salary + " " + this.designation;
    }
}
var v1 = new Emp("sriram", 23, 25000, "software developer");
var v2 = new Emp("ram", 23, 25000, "software developer");
console.log(v1.displayDetails());
console.log(v2.displayDetails());

class Programmer extends Emp{
    address;
    constructor(name, age, salary, designation,address)
    {
        super(name, age, salary, designation);
        this.address=address;
    }
   displayAll()
   {
       this.displayDetails();
       console.log("Address : " + this.address);
   }
}
var v3 = new Programmer("Ram",22,25000,"UI","BANGALORE");
v3.displayAll();