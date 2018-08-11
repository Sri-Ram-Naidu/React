interface J
{
    abc():string;
    xyz(x:number):void;
    atoz();
}
let j:J={
     abc:function(){
         return "Hi";
     },
     xyz:function(x:number)
     {
        console.log(x);
     },
     atoz:function(){
         console.log("Hello Ram");
     }
};
console.log(j.abc());
j.xyz(10);
j.atoz();


class Sriram implements J
{
    abc(): string 
    {
        return "Hi Sriramnaidu Sunkara"
    }    xyz(x: number): void 
    {
        let y : number = 20;
        console.log("The Value is : " + (x+y));
    }
    atoz() 
    {
       console.log("Thanks Ram");
    }


}
var sriram = new Sriram();
console.log(sriram.abc());
sriram.xyz(10);
sriram.atoz();
