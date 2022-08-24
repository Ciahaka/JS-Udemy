/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const numerology = {
    name: 'Alex',
    surname: 'Pechkin',
    favoriteNumber: 265
    }

const numLog =`My name is ${numerology.name} ${numerology.surname} and my favorite number is ${numerology.favoriteNumber}`
console.log(numLog)

/**
 * Эта задача решается с более короткой записью при помощи деструктуризации объекта
 * @type {{favoriteNumber: number, surname: string, name: string}}
 */
const person = {
    name: 'Bob',
    surname: 'Ivanov',
    favoriteNumber: 4
}
const {name,surname,favoriteNumber} = person
const numLog_2 =`My name is ${name} ${surname} and my favorite number is ${favoriteNumber}`
console.log(numLog_2)

