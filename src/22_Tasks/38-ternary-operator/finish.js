/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// function isArrayEmpty(inputArray) {
//     if (inputArray.length > 0) {
//         return 'Массив не пустой'
//     } else {
//         return 'Массив пустой'
//     }
// }
// console.log(isArrayEmpty([1, 3]))
// console.log(isArrayEmpty([]))


function isArrayEmpty(inputArray) {
    if (inputArray.length > 0) {
        return 'Массив не пустой'
    }
    if (inputArray.length === 0) {      ////да, но нет, бляч...
        return 'Массив пустой'
    }
}
console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

/**
 поскольку после первого return фукция прекратит выполняться, то вторую часть кода с else можно опустить. И в случае лживости условия просто вернуть по дефолту строку 'Массив пустой'
 * @param inputArray
 * @returns {string}
 */
function isNewArrayEmpty(inputArray) {
    if (inputArray.length > 0) {
        return 'Массив не пустой'
    }
    return 'Массив пустой'
}

console.log('NewARR', isNewArrayEmpty([1, 3]))
console.log('NewARR', isNewArrayEmpty([]))

/**
 *
 * @param inputArray
 * @returns {string}
 */
function isMyArrayEmpty(inputArray) {
    return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}

console.log('MyARR', isMyArrayEmpty([1, 3]))
console.log('MyARR', isMyArrayEmpty([]))


const isOurArrayEmpty = (inputArray) => {
    return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}
console.log('OurARR', isOurArrayEmpty([1, 3]))
console.log('OurARR', isOurArrayEmpty([]))



