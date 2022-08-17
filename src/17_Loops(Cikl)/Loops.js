// блок кода ниже является дублированием и избыточным. данную задачу можно решить с помощью циклов (Loops)
let i = 0
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)

console.log('//////')

for (let i=0; i<6;i++){   //Пример решения той же задачи при помощи цикла for
    console.log(i)        //Внутри цикла создал инструкцию при которой объявил переменную i и присвоил ей значение 0.
    // После задал условие для выхода из цикла, переменная i не должна быть больше или равна 6. В конце ссоздал условие
    // для шага - с каждой новой итерацией переменная i будет увеличена на 1.
}
console.log('//////')

//блок кода ниже - способ перебора массива, без помощи циклов. Данный способ неудобен для крупных массивов
const newArray = [true, 'bang', 15]
console.log(newArray[0])
console.log(newArray[1])
console.log(newArray[2])

console.log('//////')

const newArray_1 = [false,'bang', 28]   //Пример решения той же задачи при помощи цикла for
for(let i=0; i<newArray_1.length; i++){  // задаем условие, что объявленная переменная i не должна превышать длину
    // length массива newArray_1. Когда i станет равна 3, то цикл прервётся.
    console.log(newArray_1[i])
}
console.log('//////')

 newArray_1.forEach((element,index)=>{ /// данную задачу можно более элегантно решить при помощи
     // метода массива forEach!
     console.log(element,index)
 })

console.log('//////')

//блок кода ниже - пример перебора свойств объекта без помощи циклов
const newObject = {
    name: 'Alex',
    age: 20,
    sex: 'men'
}
console.log(newObject.name)
console.log(newObject.age)
console.log(newObject.sex)

console.log('??????')

let b= 0
while (b<7){          //цикл while может быть бесконечным
    console.log(b)
    b++               // необходимо внутри цикла самостоятельно задать условие для его прерывания? если данной строчки
    // не будет, то цикл станет бесконечным!
}
console.log('??????')

const myNewObject = {
    name: 'Alex',
    age: 20,
    sex: 'men'
}
for (const key in myNewObject) {
    console.log(key,myNewObject[key])
}

Object.keys(myNewObject).forEach((key)=>{  //аналогичное решение при помощи метода keys глобальной переменной (функции(объекта)) Object. Создаётся массив свойст объекта и переберается методом forEach
    console.log(key,myNewObject[key])
})

Object.values(myNewObject).forEach((key)=>{ //тот же способ, но уже обращаемся к методу values и пробегая по массиву
    // значений получаем Alex 20, men
    console.log(key,myNewObject[key])
})
//конвертация объектов в массив очень полезная спрособность

const myNewObject_2 = [true, 10, 'abc',null]    //Пример использования цикла for in для перебора массива. Так делать не
// нужно, так как для массивов есть свои методы, которые справляются с задачей более эффективно
for( const key in myNewObject_2) {
    console.log(myNewObject_2[key])
}

const myMessage = 'Привет, хлебушек! Прогресс есть?' // цикл for of может иттерировать всё, за исключением объектов, но! в первую очередь идеально подходит для перебора элемнта строк. Так же можно иттерировать и объекты, предварительно трансформировав их в массивы. Но! Для этого подойдёт лучше метод массива forEach
for (const letter of myMessage) {
    console.log(letter  )
}
