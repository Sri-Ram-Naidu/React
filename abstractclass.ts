abstract class Sri
{
    constructor()
    {
        console.log("My Name is Sriram Naidu Sunkara");
    }
    add(x:number,y:number)
    {
        console.log("The Value Is : " + (x+y));
    }
   abstract enterSomething();
}

class Demo1 extends Sri
{
    constructor()
    {
        super();
    }
    
    add(x: number, y: number): void 
    {
     let z : number = 40;
     console.log("The Value is : " + (x+y+z));

    }    enterSomething()
     {
        console.log("Hello Rams");
    }

}
var demo = new Demo1();
console.log(demo.add(10,20));
demo.enterSomething();
  


















