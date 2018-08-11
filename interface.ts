interface User
{
    name:string;
    age:number;
    designation?:string;
}
let user : User;
user = {name:"Sriram",age:23,designation:"Software Engineer"};
console.log(user.name);
console.log(user.age);
console.log(user.designation);
console.log("---------");
let user1 : User;
user1 = {name:"SriramNaidu",age:23,designation:"Software Developer"};
console.log(user1.name);
console.log(user1.age);
console.log(user1.designation);