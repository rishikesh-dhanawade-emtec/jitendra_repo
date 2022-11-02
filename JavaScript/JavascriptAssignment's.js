// -----------------------------Question - 1--------------------------------

// Create a function that takes two numbers as arguments and returns their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

// ------------------------------Solution----------------------------------

// function addNum(num1,num2){
//     sum = num1 + num2;
//     return parseInt(sum);
// }
// console.log(`Addition(3 + 2)= ${addNum(3,2)}`)
// console.log(`Addition(3 + 2)= ${addNum(-3,-6)}`)
// console.log(`Addition(3 + 2)= ${addNum(7,3)}`)

// -----------------------------Question - 2--------------------------------

// Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

// ------------------------------Solution----------------------------------

// function calculatePower(voltage,current){
//     power = voltage * current;
//     return parseInt(power);
// }
// console.log(`calculatedPower(230 * 10)= ${calculatePower(230, 10)}`)
// console.log(`calculatedPower(110 * 3)= ${calculatePower(110, 3)}`)
// console.log(`calculatedPower(480 * 20)= ${calculatePower(480, 20)}`)

// -----------------------------Question - 3--------------------------------
// Write a function that takes an integer minutes and converts it to seconds.
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
// ------------------------------Solution----------------------------------

// function convert(minutes) {
//     let result = minutes * 60;
// 	return result;
// }
// console.log(`Conversion of Minutes to Seconds(5)=${convert(5)}`)
// console.log(`Conversion of Minutes to Seconds(3)=${convert(3)}`)
// console.log(`Conversion of Minutes to Seconds(2)=${convert(2)}`)

// -----------------------------Question - 4--------------------------------
// Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
// ------------------------------Solution----------------------------------

// function areaofTraingle(base,height){
//     let area = (base * height)/2;
//     return area;
// }

// console.log(`Area of Traingle is(3,2)= ${areaofTraingle(3,2)}`)
// console.log(`Area of Traingle is(7,4)= ${areaofTraingle(7,4)}`)
// console.log(`Area of Traingle is(10,10)= ${areaofTraingle(10,10)}`)

// -----------------------------Question - 5--------------------------------
// Create a function that takes the age in years and returns the age in days.
//  calcAge(65) ➞ 23725
//  calcAge(0) ➞ 0
//  calcAge(20) ➞ 7300
// ------------------------------Solution----------------------------------

// function calcAge(years){
//     let getAge = years * 365;
//     return getAge;
// }
// console.log(`Age 65 years = ${calcAge(65)} days`)
// console.log(`Age 0 years = ${calcAge(0)} days`)
// console.log(`Age 20 years = ${calcAge(20)} days`)

// -----------------------------Question - 6--------------------------------
// create a function to swap two parameters
//  let n1 = 10
//  let n2 = 20
//  swap(n1, n2) ➞ n1: 20, n2: 10

// ------------------------------Solution----------------------------------

// function swap(n1,n2){
//     temp = n1;
//     n1 = n2;
//     n2 = temp;

//     return n1,n2;
// }

// console.log(`The Value of n1 and n2 after swapping = n1 = ${swap(20)}, n2 = ${swap(10)}`)
// console.log(`n1 = ${swap(20)}, n2 = ${swap(10)}`)

// -----------------------------Question - 7--------------------------------
// create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 98

// ------------------------------Solution----------------------------------

// const numbers = [10,21,5,25,6,60,23,26,49,98]
// function maximum(){
//     let max = numbers[0];
//     for(let i=0;i<numbers.length;i++){
//         if(max<numbers[i]){
//             max = numbers[i]
//         }
//     }
//     console.log("findMax("+numbers+") = "+max)
// }
// maximum();

// -----------------------------Question - 8--------------------------------
// create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 5


// ------------------------------Solution-----------------------------------

// const numbers = [10,21,5,25,6,60,23,26,49,98]
// function minimum(){
//     let min = numbers[0];
//     for(let i=0;i<numbers.length;i++){
//         if(min>numbers[i]){
//             min = numbers[i];
//         }
//     }
//     console.log("findMin("+numbers+") = "+min)
// }
// minimum();

// -----------------------------Question - 9--------------------------------

// Write a function which checks given input/parameter:
// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input
// Number'
// isfizzBuzz('one') ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(true) ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(9) ➞ Fizz
// isfizzBuzz(10) ➞ Buzz
// isfizzBuzz(30) ➞ FizzBuzz
// isfizzBuzz(11) ➞ Some odd number entered: 11
// ------------------------------Solution-----------------------------------

// let input = prompt("Enter a number: ")
// function isfizzBuzz(){
//     if(typeof(input)=='number'){
//         if(input%3==0 && input%5==0){
//             console.log("FizzBuzz")
//         }else if(input%3==0){
//             console.log("Fizz")
//         }
//         else if(input%5==0){
//             console.log("Buzz")
//         }else{
//             console.log("Some odd number Entered: "+input)
//         }
//     }
//     else{
//         console.log("Nan Not a Number! Please Input Number")
//     }
// }
// isfizzBuzz('one')
// isfizzBuzz('true')
// isfizzBuzz(9)
// isfizzBuzz(10)
// isfizzBuzz(30)
// isfizzBuzz(11)

// -----------------------------Question - 10--------------------------------

// Write a function which checks number till given input/parameter is odd or even

// ------------------------------Solution-----------------------------------

// const number = prompt("Enter a number:");
// function oddEven(){
//     if(number % 2 == 0){
//         console.log("The number is Even")
//     }
//     else{
//         console.log("The number is Odd")
//     }
// }
// oddEven();

// -----------------------------Question - 11--------------------------------

// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33


// ------------------------------Solution------------------------------------

// function sum0fMultiples(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
  
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   console.log( `Sum of Multiple Value of 3 & 5 upto 10 digit is: ${sum0fMultiples(10)}` );

// -----------------------------Question - 12--------------------------------

//   Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
//   showPattern(5)
//    *
//    **
//    ***
//    ****
//    *****

// ------------------------------Solution------------------------------------

//   let n = 5;
//   let string = "";
//   function star(){
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
//           string += "*";
//         }
//         string += "\n";
//       }
//       console.log(string);
//   }
//   star();

  // -----------------------------Question - 13--------------------------------

//   Write a function which Calculate the sum of marks provided in an array, average it and also show
// Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [55, 85, 55, 65];
// calculateGrades(marks) ➞ Grade: D


  // ------------------------------Solution------------------------------------

// const marks = [55, 85, 55, 65];

// let sum = 0;
// for(let index = 0;index < marks.length;index++){
//     sum = sum + marks[index]
//     avg = sum / marks.length
// }

// function calculateGrades(marks){
//     if(avg < 70){
//         console.log('D Grade')
//     }
//     else if (avg < 70 && avg >= 79){
//         console.log('C Grade')
//     }
//     else if(avg < 80 && avg >=89){
//         console.log('B Grade')
//     }
//     else{
//         console.log('A Grade')
//     }
// }
// calculateGrades(marks)

// -----------------------------Question - 13--------------------------------
// Write a function which show or print Prime Number upto provided range (with and without map)
// showPrimeNumbers(20);
// Prime Number: 2
// Prime Number: 3
// Prime Number: 5
// Prime Number: 7
// Prime Number: 11
// Prime Number: 13
// Prime Number: 17
// Prime Number: 19
// ------------------------------Solution------------------------------------

function isPrime(num){
    if(num < 2){
        return false
    } 
    else{
        for(let index = 2;index < num;index++){
            if(num % index == 0){
                return false
            }
        }
        return true
    }
}

function showPrimeNumbers(range){
    for(let index = 1;index < range;index++){
        if(isPrime(index)){
            console.log('Prime Number : ${index}')
        }
    }
}
showPrimeNumbers(20)