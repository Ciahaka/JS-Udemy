let b = 10
if (b > 5) {
    b += 20
}
console.log(b)

let c = 29
if (c >= 30) {
    console.log('Urrra!')
} else {
    c -= 5
    console.log('pizdec')
}
console.log(c)

console.log('Ahtung')
let d = 50
if (d < 30) {
    d -= 10
} else {
    d += 15
}
console.log(d)

const nastya = {
    age: 10,
    body: {
        hands: 2,
        legs: 'two legs',
        head: true,
    },
    name: 'Курлык'
}
if (!nastya.name) {   //<-- условная конструкция в условие, которая говорит, что если имя в объекте не указано, то следует вывести в консоли 'Пользователь не указал имя' Если имени нет - true, если имя есть false
    console.log('Пользователь не указал имя')
} else {             //<-- если условие true, то выполниться второй блок кода и в консоль выведиться указаное имя
    console.log(nastya.name)
}

console.log('Ahtung')

const nastyaAge = 1
if (nastyaAge >= 18) {
    console.log('Взрослая')
} else if (nastyaAge >=10 ) {
    console.log('Девчёнка')
} else {
    console.log('Детёныш') }
console.log('......')
//последующее решение аналогично предыдущему, но запись иная. Более просто для чтения, но нужно учитывать в последующих условиях, условия предыдущие
const nastyaAge_2 = 19
if (nastyaAge_2 >= 18) {console.log('is adult')}

if (nastyaAge_2 >=10 && nastyaAge_2 <18 ) {console.log('is teenager')}

if (nastyaAge_2 < 10 ) {console.log('the child') }

const sumPositiveNumber =(a,b) => {
    if (a!=='number' || b!=='number'){
        return 'Одно из значений не является числом!'
    }
    if (a<0 || b<0){
        return "Одно из значений является отрицательным!"
    }
    return a+b
}

console.table(sumPositiveNumber('Boom', 10))
console.table(sumPositiveNumber('Boom', 10))
