/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr = [1, 2] // <-- Объявление переменной используя const   <--- меняем const на let !!!

arr.push(3)

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]   // <--- так же можно было решить эту проблему добавив элемент в массив посредством метода .push и
// оставить объявление переменной с помощью const  -- > arr.push(3)
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]