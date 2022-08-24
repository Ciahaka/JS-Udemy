/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

// const greetingFn = () => {
//     const hello =()=>console.log('Привет, Мир!')
//     setTimeout(hello, 5000)
// }
// console.log


/** иное решение */
setTimeout(() => console.log('Hello, Мир!'), 5000)
/** или же */
const greetingFn_2 = () => console.log('Привет, world')
setTimeout(greetingFn_2, 5000)
