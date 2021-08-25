import {vehicle} from './access'

export class demo
{
    username:string;
    school:string;
    

    constructor(usernm:string ,schl:string)
    {
    this.username = usernm;
    this.school = schl;
    }

    getusername()
    {
        return this.username;
    }

    

    getschool()
    {
        return this.school;   
    }

}

let bmw=
{
    colour:"Green",
    engine: 98766,
    body:"bmw"
}

validatecar(bmw);

function validatecar(car:vehicle)
{
    console.log(car.colour);
    console.log(car.body);
    console.log(car.engine);
}


