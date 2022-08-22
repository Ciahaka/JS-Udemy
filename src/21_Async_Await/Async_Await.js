const asyncFn = async () => { // ключевое слово async всегда ставиться перед началом фукции (как в примере или же
    // async function myFn (){......} )
    return 'Abra-Kadavra'
}

console.log(asyncFn())  //асинхронная функция возвращает промис, всегда

const newAsync = async () => {
    return 15
}
newAsync()
    .then(value => console.log(value))    //значение промиса вернулось в виде числа 15

const myAsyncFn = async () => {
    throw new Error('какая-нибудь ошибка') //заведомо создали асинхронную функцию со значением ошибка и текстом ошибки. промис данной функции будет отклонён.
}
myAsyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))  //следовательно мы дойдём до вызова метода catch и споймаем ошибку
//Прелесть асинхронной   функции в том, что не нужно вызывать ни resolve, ни reject, потому-что они находяться под капотом в данном случае и будут вызваны неявно!

//при помощи ключевого слова await можно ожидать исполнения другого промиса внутри асинхронной функции.
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000)
    )
const asyncTimer = async () => {
    console.log('Старт')
    await timerPromise()      //функция не выполняется (ожидает), пока промис будет удовлетворён или отклонён
    console.log('Финиш')
}
console.log(asyncTimer())

const executionTime = () =>
    new Promise((resolve, reject) =>  //функция возвращает новый экземпляр промиса
        setTimeout(() => resolve(), 3000) //промис должен быть исполнен через три секунды
    )
const testExecution = async () => {
    console.log('Start time')
    const startTimer = performance.now()  // performance интерфейс DOM, позволяет засеч время
    await executionTime()                 //<--- ожидаем исполнения промиса, и выполняем функцию дальше
    const finishTimer = performance.now()
    console.log('Finish time', finishTimer - startTimer) //при помощи вычитания  переменных получим результат времени
    // выполнения функции, тем самым проверив await
}
console.log(testExecution())

//Миграция с промисов на асинхронные функции

// const getData = (url) =>
//     new Promise((resolve,reject)=>
//         fetch(url)
//             .then((response)=> response.json())
//             .then((jason)=> resolve(jason))
//             .catch((error)=> reject(error))
//     )
// getData('https://jsonplaceholder.typicode.com/todos/6')
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error.message))
//Код выше (из прошлой главы) можно переписать, тем самым упростив его, при помощи асинхронных функций
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url= 'https://jsonplaceholder.typicode.com/todos/6'
// const data = await getData(url) //<---При таком способе нет возможности отлавливать ошибки корректно. Нужно
// использовать блок try/catch
try {
    const data = await getData(url)
    console.log(data)
} catch (error){
    console.log(error.message)
}





