function sum(x, y) {
    var c = x + y;
    return c;
}
console.log(sum(5, 10));
var add = function (x, y) {
    var c = x + y;
    return c;
};
var test = function (x, y) { return x - y; };
console.log(add(10, 20));
console.log(test(25, 10));
