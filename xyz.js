"use strict";
exports.__esModule = true;
var Emp = /** @class */ (function () {
    function Emp(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    Emp.prototype.displayDetails = function () {
        return this.name + " " + this.age + " " + this.salary + " " + this.designation;
    };
    return Emp;
}());
exports.Emp = Emp;
var v1 = new Emp("sriram", 23, 25000, "software developer");
console.log(v1.displayDetails());
/**class Programmer extends Emp{
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
v3.displayAll();*/ 
