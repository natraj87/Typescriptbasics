"use strict";
exports.__esModule = true;
var classdemo_1 = require("./classdemo");
var cd = new classdemo_1.demo("Natarajan", "St joseph matrc school");
console.log(cd.getusername());
console.log(cd.getschool());
function add(val) {
    val = val + 1;
    return val;
}
console.log(add(5));
function validatecar(car) {
    console.log(car.colour);
    console.log(car.body);
    console.log(car.engine);
}
