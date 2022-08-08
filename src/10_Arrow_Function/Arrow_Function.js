// (a, b) => { //<---стрелочная функция всегда анонимная!
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

const myFn = (a, b) => {  //<--- присвоение стрелочной функции переменной.
    let c
    a = a + 1
    c = a + b
    return c
}
myFn(3,8)

setTimeout(()=>{console.log('RERERE')},3000)

//варианты сокращения стрелочных функций
const myNewFn = a => { //<--- когда у функции лишь один параметр, то можно опустить круглые скобки. Но, читаемость кода
    // лучше, если круглые скобки присутствуют даже при одном параметре(аргументе)! Круглые скобки явно указывают на то,
    // что это функция
    let c
    a = a + 1
    c = a
    return c
}
myNewFn(6)

const myNewFn_2= (a,b)=> a+b   //<--- фигурные скобки можно опустить, при условии, что значение функции состоит из
// одного выражения. В этом случае return результата не нужен, так как результат будет возвращён автоматически (неявно)
myNewFn_2(3,9)

function multiplicationByFactor (value,multiplier = 15) {
    return value * multiplier
}
multiplicationByFactor(3,80) //240
multiplicationByFactor(5)  //75

const multByFactor_1 =  function (value,multiplier = 15) {
    return value * multiplier
}
multByFactor_1(6,35) //210
multByFactor_1(10)  //150

const multByFactor_2 = (value,multiplier = 15) => {
    return value * multiplier
}
multByFactor_2(86,45) //3870
multByFactor_2(2)  //30
