/**
 * Mang trong Javascript
 * 1. Tao mang
 * - Cach tao
 * - Su dung
 *  - Kiem tra type
 * 2. Truy xuat mang
 *  - Do dai mang
 *  - Lay phan tu theo index
 */
var languages = [
    'Javascript',
    'Ruby',
    'PHP',
    null,
    12,
    {}
]
console.log(typeof languages)
var nnlaptrinh = new Array( 'Javascript',
    'Ruby',
    'PHP',
    null,
    12,
    {})
console.log(typeof nnlaptrinh)
// Lam sao de kiem tra cai nao la object, cai nao la array?
console.log(Array.isArray(languages))
var TuanVu = {
    age:21,
    address: 'Yen Xa'
}
console.log(Array.isArray({}))
console.log(typeof (TuanVu))
/**
 * Lam việc vơi Array
 * 
 * To string
 * Join
 * Pop: xoa phan tu cuoi mang va tra ve phan tu do
 * Push: them mot hoac nhieu phan tu vao cuoi mang va tra ve do dai moi cua mang
 * Shift: xoa mot phan tu dau mang va tra ve phan tu do
 * Unshift: them mot hoac nhieu phan tu vao dau mang va tra ve do dai moi cua mang
 * Splicing: tham so dau tien la vi tri con trỏ, tham số thứ 2 là deleteCount, tham số thứ 3 là 
            các ptu muốn truyền vào mảng
 * Concat: nối array
 * Slicing
 */
var languages = [
    'Js',
    'Java',
    'PHP'
]
console.log(languages.toString())
console.log(languages.join(', '))
console.log(languages.pop())
console.log(languages)
console.log(languages.push('Dart'))
console.log(languages)
console.log(languages.shift())
console.log(languages.unshift('Js', 'Dart'))
console.log(languages)
//Xoa phan tu theo chi muc va so phan tu xoa bat dau tu do
console.log(languages.splice(1,0))
//Chen phan tu theo chi muc
console.log(languages.splice(1, 0, 'Python'))
var languages2 = [
    'C++',
    'C#',
    'Pascal'
]
console.log(languages.slice(0))
console.log(languages.concat(languages2))

