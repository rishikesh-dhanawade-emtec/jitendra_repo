// Create an arrow function that takes an object with default values. Here're the interface and
// expected results.
var myFunc = function (para) {
    var _a = para.firstParam, firstParam = _a === void 0 ? "defaultFirst" : _a, _b = para.secondParam, secondParam = _b === void 0 ? "defaultSecond" : _b;
    var Final_Result = " firstParam: ".concat(firstParam, ", secondParam: ").concat(secondParam);
    return (Final_Result);
};
console.log(myFunc({}));
console.log(myFunc({ firstParam: 'Jitendra', secondParam: 'Patil' }));
