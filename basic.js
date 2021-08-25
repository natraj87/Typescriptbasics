//var is function scoped
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i), 100 * i; });
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1), 100 * i_1; });
};
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
