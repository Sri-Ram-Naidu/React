function abc() {
    console.log("Hello");
}
var abc1 = function() {
    console.log("Hello");
}
var abc3 = () => {
    console.log("Hello");
}
function abcz(x,y)
{
    console.log(x+y);
}
var xyz = (x,y)=>{
    console.log(x*y);
}
abc();
abc1();
abc3();
abcz(10,20);
xyz(10,20);
class Abcd
{
   str = "Hello EveryBody";
   constructor()
   {
       var s = this;
       console.log("Constructor : " +this.str);
       setTimeout(()=>{console.log(this.str);},5000);
   }
   abc()
   {
    console.log("Display :"+this.str);
   }
}
var a1 = new Abcd();
a1.abc();




class Ram
{
  a : any = 30;
  constructor()
  {
      var s = this;
      console.log("The Number is : " + (this.a + this.a));
      setTimeout(()=>{console.log(this.a);},2000);
  }
num(x)
{
    console.log("Dipslay : " + (this.a + x));
}
}
var b1 = new Ram();
b1.num(10);cc
