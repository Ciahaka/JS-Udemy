/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
setTimeout(() => console.log('Сообщение номер 1'), 0)
setTimeout(() => console.log('Сообщение номер 2'), 2000)
setTimeout(() => console.log('Сообщение номер 3'), 4000)
setTimeout(() => console.log('Сообщение номер 4'), 6000)
setTimeout(() => console.log('Сообщение номер 5'), 8000)
/**
 Один из вариантов решения выше, с использованим лишь метода setTimeout
 */
 let i = 1    // создаём переменную в глобальной области, так как если создать её внутри функции, то с каждым вызовом
              // функции будет пересоздоваться переменная.
const clearInterval = setInterval(() => {
    console.log('Сообщение номер ' + i)  //используем оператор +, чтобы объеденить строко и значение переменной,
              // которое увеличиваем на 1 с каждым вызовом функции
    i += 1
}, 2000)

setTimeout(() => {
    clearTimeout(clearInterval);
    console.log('STOP')
}, 12000)
/**
 Ниже приведён пример решения задачи при помощи вложенного setTimeout. Данный способ является более гибким в сравнении
 с методом setInterval
 * @type {NodeJS.Timeout}
 */
let enclosedTimeout = setTimeout(function slam() {
  console.log('Сообщение номер ' + i)
    i += 1
    enclosedTimeout = setTimeout(slam,2000)
},0)                                        //<--- если нужно стартовать с нуля, то не стоит указывать стартовый
// параметр в две секунды, или можно проставить ноль
setTimeout(() => {
    clearTimeout(enclosedTimeout);
     console.log('STOP')
 }, 10000)
