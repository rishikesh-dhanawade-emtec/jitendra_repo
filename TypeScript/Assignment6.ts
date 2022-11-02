// Write a program that contains a function that has one parameter, n, representing an integer greater
// than 0. The function should return n! (n factorial). Then write a main function that calls this function
// with the values 1 through 20, one at a time, printing the returned results. This is what your output
// should look like:
// 126
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 36288002

function Factorial(num:number):number {
    if(num == 0)
    return 1;
    return num * Factorial(num-1)
}

function main(){
    for(let i = 1; i <= 20; i++){
        let res = Factorial(i);
        console.log(res);
        
    }
}
console.log("Factorial from 1 to 20: ");
main();