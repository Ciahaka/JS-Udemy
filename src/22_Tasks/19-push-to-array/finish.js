/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myArray = [34, undefined,'pops', 21]
console.log(myArray.length)
myArray.push(16)
console.log(myArray.length)
myArray.push(false)
console.log(myArray.length)
myArray.push(28,13,true)
console.log(myArray.length)

console.log(myArray)
