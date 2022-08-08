function myName(a,b) {  //<--- объявленная функция
    let c
    a=a+1
    c=a+b
    return c
}
myName()
console.log(myName)

let myNewName = function (a,b) {  //<--- анонимное функциональное выражение (анонимная функция), с присвоением к
    // переменной. Слева находится переменная, а справа сама анонимная функция. Функция начинается именно справа!
    let c
    a=a+1
    c=a+b
    return c
}
myNewName(4,6)
console.log(myNewName)

setTimeout(function (){console.log('RERERE')},3000) //<---- использование анонимного функционального
// выражения в качестве колбэка


