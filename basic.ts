
//var is function scoped

//var is also loosely coupled

for(var i =0 ; i < 5; i++)
{
    setTimeout(function () {console.log(i), 100 *i});
}

//declare with return type
let a:number = 10
let list:Array<number> = [10,9,8,7]

//let is block scoped
//let can break the asynchronous chain
//let code helps in execution of code like synchronous
for(let i =0 ; i < 5; i++)
{
    setTimeout(function () {console.log(i), 100 *i});
}
