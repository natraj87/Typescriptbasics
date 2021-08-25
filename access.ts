import {demo} from './classdemo';


let cd = new demo("Natarajan","St joseph matrc school");
console.log(cd.getusername());
console.log(cd.getschool());


function add(val:number):number
{
   val = val +1;
   return val;
}
console.log(add(5));

export interface vehicle
{
colour:string;
engine:number;
body:string;
}



function validatecar(car:vehicle)
{
    console.log(car.colour);
    console.log(car.body);
    console.log(car.engine);
}
