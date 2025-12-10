/**Lam viec voi kieu so trong Js
 * 1. Tao gia tri number
 * 2. Lam viec voi Number
 *  To string
 *  To fixed
 */
var age = 21;
var test = 'abc';
var res = age / test;
console.log(res)
// NaN: đại diện cho 1 số không hợp lệ
console.log(typeof res)
console.log(isNaN(res))
console.log(age.toString())
console.log(age)
var PI = 3.14167948520
console.log(typeof PI.toFixed())
console.log(PI.toFixed(3))