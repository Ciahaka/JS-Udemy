//Область видимости определяет границы действия объявленных переменных
//разные переменные, но с одинаковыми именами, могут пересекаться в разных областях - это допустимо
let a
let b
const myFn = () => {             ///{
    let b
    a=true                           //<----локальная область видимости
    b=15
    console.log(b) //10          ///}   <--- let b объявленна в локальной области видимости, и обращаясь внутри
    // локальной области видимости к b, получаем значение из локальной области
}
myFn()
console.log(a)    //true
console.log(b)    //undefined   <--- обращаясь к b вне локальной области видимости, получаем результат из
// глобальной области видимости

const d= 123
const myNewFn = () => {
    const innerFn =()=>{
        console.log(d)
    }
    innerFn()
}
myNewFn()                   //<---цепочка областей видимости

//жизненный цикл переменных
let g
let h
const myFn2 = () => {
    let h         // <---после выполнения функции myFn2 и завершении её работы, все переменные удалились, и вызывая
    // переменную h в глобальной области, получаем undefined, а не 80
    g=false
    h=80
    console.log(h)
}
myFn2()
console.log(h)    //<--- undefined
console.log(g)   //<--- изменили глобальную переменную изнутри локальной области функции myFn2. так делать не стоит
