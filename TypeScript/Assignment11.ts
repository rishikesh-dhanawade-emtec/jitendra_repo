// Write a program to Interchange First and Last Element of a List

let arr : any = [10,20,30,40];
function swapTwoElements(arr: any[]){
    arr[0],arr[arr.length - 1] = arr[arr.length - 1],
    arr[0];
 return arr;
}

console.log(swapTwoElements([1,2,3,4]));
console.log(swapTwoElements([0,2,1]));
console.log(swapTwoElements([3]));