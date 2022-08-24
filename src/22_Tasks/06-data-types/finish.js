/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
const string = 'Kongo'
console.log(typeof string)

const number = 14
console.log(typeof number)

const boolean = true
console.log(typeof boolean)

let kuku = null
console.log(typeof kuku)   // object (не "null" из соображений обратной совместимости) null
/** null создавался для того чтобы задавать пустое значение для объектов! */

let bob
console.log(bob)

const myObject = {
    name: "Alex",
    age: 41
}
console.log(typeof myObject)

const myArray = [ 10, 15, true, 'array']
console.log(typeof myArray)


