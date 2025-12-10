/// Làm việc với chuỗi
/**
 * length
 * find index
 * cut string
 * replace
 * convert to uppercase
 * convert to lowercase
 * trim
 * split
 * get a character by index
 */
var myString = 'Anh yeu Dang Thi Thuy cua anh nhieu lam a Thuy oi em co biet khong';
// Length
console.log(myString.length)
// find index of 'Thuy'
console.log(myString.indexOf('Thuy'))
//Tim kiem string Thuy bat dau tu ki tu 18
console.log(myString.indexOf('Thuy', 18))
//cut string
console.log(myString.slice(17, 30))
//cat tu phai sang trai
console.log(myString.slice(-5))
//replace
// /Thuy/g tifm kiem tat ca, sau do ghi de
console.log(myString.replace(/Thuy/g, 'suThyy'))
//UpperCase
console.log(myString.toUpperCase())
//trim
console.log(myString.trim())
//split
var languages = 'Javascripts, PHP, Ruby, Java';
console.log(languages.split(', '))
//charAt
const tempString = 'abcdefgh'
console.log(tempString.charAt(15))
console.log(tempString[15])