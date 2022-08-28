/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]

myArray.unshift('Привет')
console.log (myArray.unshift(100)) //метод unshift содержит в себе возможность вывести длину обновлённого массива,
// после добавления нового элемента массива. Поэтому после очередного вызова метода и добавления в массив элемента,
// сразу эе можно обернуть этот вызов в метод лог и получить длину нового массива.

// Напишите код здесь

console.log(myArray) // [100, "Hello", true, null]
console.log(myArray.length)

