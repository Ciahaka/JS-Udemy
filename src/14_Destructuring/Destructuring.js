//Деструктуризация объекта даёт возможность обратиться к свойствам и их значениям внутри объекта и на их основе создать новые переменные, минуя написания излишнего кода
const userProfile = {
    name: 'Banderlog',
    commentsQty: 54,
    hasSignedAgreement: true
}
const {name, commentsQty, hasSignedAgreement} = userProfile
console.log(commentsQty)
console.log(hasSignedAgreement)
console.log(name)

console.log('break')

const myTable = {
    tabletop: {
        material: 'wood',
        tableLegs: 4
    },
    height: 200,
    brand: 'Ikea',
}
const {tabletop,height,brand} = myTable
console.log(tabletop.material)
console.log(height)
console.log(brand)
console.log(tabletop.tableLegs)

//Деструктуризация массивов схожа с деструктуризацией объектов. Но, переменные объявляются при помощи квадратных скобок
// и учитывая, что порядок элементов в массиве важен и нельзя обратиться по имени к свойствам(массив - объект с
// цифровыми наименованиями свойств), то именуюем переменные произвольными именами в порядке строго соответствующем
// порядку свойств в массиве
console.log('!!!')
const myFurniture = ['table', 'chair','bed']
const[el_1,el_2,el_3]= myFurniture
console.log(el_1)
console.log(el_2)
console.log(el_3)

//Деструктуризация функции
console.log('!!!!')
const myTable_2 = {
    tabletop: {
        material: 'wood',
        tableLegs: 4
    },
    height: 200,
    brand: '',
}
const infoTable= ({tabletop,height,brand}) => { //деструкторизация происходит внутри параметров функцииб использовать
    // новые переменные можем уже дальше, внутри тела функции и инструкциях. Деструктуризацию исходного объекта можно
    // провести и внутри тела функции, но это будет избыточным написанием кода
    if (!brand) {
        return `Сожги ${tabletop.material}, сломай все ${tabletop.tableLegs} ноги и сбрось с высоты в ${height} метров!`
    }
    return `Накрой ${tabletop.material} кружевной скатеркой и выпей чаю!`
}
console.log(infoTable(myTable_2))