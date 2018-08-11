class A 
{
    x : number;
   protected y: number;
    z : number;
    constructor(x:number,y:number,z:number)
    {
        this.x=x;
        this.y=y;
        this.z=z;

    }
    display()
    {
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
    }
}
/**class B extends A
{
    displayAll()
    {
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
    }
}
let a22 = new B(1,2,3);
a22.displayAll();**/
class C
{
   a4 = new A(10,20,30);
     displayAny()
     {
        console.log(this.a4.x);
        //console.log(this.a4.y);
        console.log(this.a4.z);
     }
}
var c4 = new C();
c4.displayAny();
