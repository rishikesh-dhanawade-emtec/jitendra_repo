// Create an arrow function that takes an object with default values. Here're the interface and
// expected results.


interface Params {
    firstParam?: string
    secondParam?: string
}
const myFunc = (para: Params) => {
    const{firstParam = "defaultFirst", secondParam = "defaultSecond"} = para;
    const Final_Result =` firstParam: ${firstParam}, secondParam: ${secondParam}`;
    return(Final_Result)
}
console.log(myFunc({}))
console.log(myFunc({firstParam: 'Jitendra', secondParam: 'Patil'}))