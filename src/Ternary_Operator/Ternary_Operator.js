const val = 5
val
    ? console.log('истина')
    : console.log('ложь')
//это выражение вернёт в консоль undefined, поскольку метод log всегда возвращает undefined

const val_2 = 3

const val_3 = 18

function myVal_1(val_2, val_3) {
    return undefined;
}

function myVal_2() {

}

val_2 && val_3
    ? myVal_1(val_2, val_3) //вызываем функцию 1, если значения 2 и 3  являются истиной
    : myVal_2()             // в иных случаях вызываем функцию 2
//вызов функции - это выражение, поэтому мы можем вызывать функцию внутри тернарного оператора

let value = 15
console.log(value >= 0 ? value : -value)  // или использовать тернарный оператор внутри функции

value = -10
const res = value >= 0 ? value : -value // присваивание выражения с тернарным оператором новой переменной
console.log(res)

