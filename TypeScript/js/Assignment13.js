// Replace a single element 'b' in given list ['a','b','c','d','e',] with [1,2,3]
var l1 = ['a', 'b', 'c', 'd', 'e',];
console.log(l1);
function replace() {
    l1.splice(1, 1, 1, 2, 3);
    console.log(l1);
}
replace();
