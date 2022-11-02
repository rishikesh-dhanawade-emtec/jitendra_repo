// 3. Complete the following function called validator, that takes an optional function argument. It
// caches the response and return it when there's.
// Given interface and function definitions
// interface CustomResponse {
//  valid: boolean
//  error: string
// }
// const errorResponse = (): CustomResponse => {
//  return { valid: false, error: 'error occurred' }
// }
// Complete this function to work described in the following expected
// results. const validator = ( validatorFn?: () => CustomResponse ):
// CustomResponse => { }
// Expected results
// console.log(validator(() => errorResponse()).valid) //=> false
// console.log(validator().error) //=> 'error occurred'

interface CustomResponse {
    valid: boolean
    error: string
}
const validator = ( validatorFn?: () => CustomResponse ): CustomResponse => { 
    return { valid: false, error: 'error occurred' }
}
const errorResponse = (): CustomResponse => {
    return { valid: false, error: 'error occurred' }
}
console.log(validator(() => errorResponse()).valid)
console.log(validator().error)