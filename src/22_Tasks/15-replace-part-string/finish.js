/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */
 let greetingString = "Good Morning"
let newGreetingString= greetingString.replace('Morning','Evening') //метод .replace позволяет
// заменить часть значения переменной. Метод имеет два аргумента через запятую. Первый аргумент - изменяемое значение,
// второй аргумент - новое значение.
console.log(newGreetingString)
