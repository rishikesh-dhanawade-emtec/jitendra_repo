// Replace a single element 'b' in given list ['a','b','c','d','e',] with [1,2,3]

const l1: any =  ['a','b','c','d','e',]

console.log(l1)

function replace(){
    let l2 = l1.splice(1, 1, 1, 2, 3);
    console.log(l2);
}
replace();