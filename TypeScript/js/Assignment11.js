// Write a program to Interchange First and Last Element of a List
function swap(arr) {
    var _a;
    _a = [arr[arr.length - 1], arr[0]], arr[0] = _a[0], arr[arr.length - 1] = _a[1];
    return arr;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));
