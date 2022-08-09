const fnWithError = () => {
    throw new Error('stupid error')  //<---инструкция, которая вызывает некую ошибку в JS
}
fnWithError()                    //<--- выполнение кода остановиться после вызова функции с ошибкой, и до консоли дело не дойдёт.
console.log('Continue...')

const fnWithError_2 = () => {
    throw new Error('stupid error')
}
try {
    fnWithError_2()
} catch (error){
    console.error(error)
    console.log(error.message)
}
console.log('Continue...')