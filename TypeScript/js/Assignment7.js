// Use inheritance
// Write a class Course with name,fees. Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Computer with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Electonics with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(name, fees) {
        this.name = "";
        this.fees = 0;
        this.name = name;
        this.fees = fees;
    }
    Course.prototype.printData = function () {
        console.log("&{name}");
        console.log("&{fees}");
    };
    return Course;
}());
var courseObj = new Course("asdf", 5000000);
console.log(courseObj);
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer(subjectList, name, fees) {
        var _this = _super.call(this, name, fees) || this;
        _this.subjectList = "";
        _this.subjectList = subjectList;
        return _this;
    }
    Computer.prototype.printData = function () {
        console.log("&{name}");
        console.log("&{fees}");
        console.log("&{subjectList}");
    };
    return Computer;
}(Course));
var computerObj = new Computer("dfsdhf", "aqadf", 300000);
console.log(computerObj);
var Electonics = /** @class */ (function (_super) {
    __extends(Electonics, _super);
    function Electonics(subList1, name, fees, subjectList) {
        var _this = _super.call(this, name, subjectList, fees) || this;
        _this.sublist1 = "";
        return _this;
    }
    Electonics.prototype.printData = function () {
        console.log("&{name}");
        console.log("&{fees}");
        console.log("&{subjectList}");
        console.log("&{subList1}");
    };
    return Electonics;
}(Computer));
