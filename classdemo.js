"use strict";
exports.__esModule = true;
exports.demo = void 0;
var demo = /** @class */ (function () {
    function demo(usernm, schl) {
        this.username = usernm;
        this.school = schl;
    }
    demo.prototype.getusername = function () {
        return this.username;
    };
    demo.prototype.getschool = function () {
        return this.school;
    };
    return demo;
}());
exports.demo = demo;
var bmw = {
    colour: "Green",
    engine: 98766,
    body: "bmw"
};
validatecar(bmw);
function validatecar(car) {
    console.log(car.colour);
    console.log(car.body);
    console.log(car.engine);
}
