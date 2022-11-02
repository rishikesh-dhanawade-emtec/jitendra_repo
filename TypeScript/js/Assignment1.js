// 1. Complete the following MyArray class in TypeScript that can handle string and number only to get
// the expected results.
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.collection = [];
    }
    MyArray.prototype.add = function (value) {
        this.collection.push(value);
    };
    MyArray.prototype.remove = function (value) {
        var index = this.collection.indexOf(value);
        return this.collection.splice(index, 1);
    };
    MyArray.prototype.getValues = function () {
        return this.collection;
    };
    return MyArray;
}());
var stringAry = new MyArray();
stringAry.add('aaa');
stringAry.add('bbb');
stringAry.add('ccc');
stringAry.remove('bbb');
console.log(stringAry.getValues());
var numberAry = new MyArray();
numberAry.add(1);
numberAry.add(2);
numberAry.add(3);
numberAry.remove(2);
console.log(numberAry.getValues());
var booleanAry = new MyArray();
//  Boolean wont work here
//  numberAry.add(true)
//  numberAry.add(false)
