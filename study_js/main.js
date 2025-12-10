/**
 * Giới thiệu 1 số hàm built-in
 * Alert
 * Console: hieenr thi thong bao trong console
 * Confirm: mot o confirm duoc hien len
 * Prompt: tuong tu nhu confirm nhung co o de lay du lieu tu nguoi dung nhap vap
 * Set timeout: set thoi gian cho 1 ham duoc thuc hien
 * Set interval: giong settimeout, nhung thuc hien lien tuc lap di lap lai
 */
// console.log('Day la thong bao')
// // alert('Hello')
// console.warn('dm')
// console.error('fuc')
// confirm('em co yeu anh khong')
// prompt('yeu tao khong')
// setTimeout(function() {
//     alert('5 giay nua xuat hien')
// }, 5000)

/**
 * Toán tử số học
 +
 -
 *
 ** lũy thừa
 / chia
 %
 ++
 --
 */
// var a = 2;
// var b = 3;
// var c = a ** b;
// console.log(c);
// Toán tử ++ ==
// Prefix & postfix
// Prefix ++a: +1 cho a, a = a + 1
//          trả về a sau khi + 1
// var a = 6;
// console.log(a++);
// var myName = 'Ngo Tuan Vu';
// myName += ' yeu Dang Thi Thuy nhieu lam'
// console.log(a + myName)
// /**
//  * Boolean

//  */
// var isTrue = true;
// console.log(isTrue)
// /**
//  * If - Else
//  */

// /**
//  6 gia tri mac dinh la false 
//  * 0
//  * false
//  * '' - ""
//  * undefined
//  * NaN
//  * null
//  */
// var fullName = null
// if(fullName)
//     console.log('DUNG ROI DMM')
// else
//     console.log('SAI CMN')
// /**
//  ** Kiểu dl
//  Dl nguyên thủy
//  * Number
//  * String
//  * Boolean
//  * Undefined
//  * Null
//  * Symbol
//  Dl phức tạp
//  * Function
//  * Object
//  */
// // Undefined
// var age;
// console.log(age)
// // Null
// var isNull = null;
// //Symbol
// var id = Symbol('id');
// var myFunction = function(){
//     alert('hello moi nguoi')
// }
// myFunction()
// // Object types

// var myObject = {
//     name: 'Tuan Vu',
//     age: 21,
//     address: 'Yen Xa',
//     myFunction: function(){

//     }
// };
// console.log(myObject)
// var myArray = [
//     'PHP',
//     'Ruby',
//     'Js'
// ];
// console.log(myArray)
// Kiem tra kieu dulieu typeof

console.log(typeof myArray)
console.log(typeof myFunction)
/**
 * Toán tử so sánh (datatype)
 * === 
 * !==
 */

var a = 2;
var b = '2';
console.log(a != b)
var result = null && false && true;
// Toán tử && đọc từ trái sang phải, nma nếu gặp 6 trường hợp false thì dừng luôn
if(result)
    console.log('Dieu kien dung')
else
    console.log('Dieu kien sai')
//Toán tử or đọc phần tử đầu tiên, nếu khác 6 trường hợp false thì nhận luôn
var result1 = '' || 'b' || 'c'
console.log(result1)
/**
 * Chuỗi trong Js
 1. Tạo chuỗi
 - Các cách tạo chuỗi
 -
 2. Một số case sử dụng backslash
 3. Xem độ dài chuỗi
 4. Chú ý độ dài
 5. Template string ES6
 */
// Cách này tạo thành 1 đối tượng
var fullName = new String('Ngo Tuan Vu')
console.log(fullName)
var suthyName = 'Dang Thuy la \'sieu nhan\''
console.log(suthyName.length)
//ES6
console.log(`Toi la: ${fullName} va nguoi yeu toi la ${suthyName}`)