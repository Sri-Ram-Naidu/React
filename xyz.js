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
var v1 = new Emp("sriram", 23, 25000, "software developer");
var v2 = new Emp("ram", 23, 25000, "software developer");
console.log(v1.displayDetails());
console.log(v2.displayDetails());
