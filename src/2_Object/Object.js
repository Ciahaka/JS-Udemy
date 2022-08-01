const myCity = {
    city: 'Minsk',
    popular: true,
    country: 'Belarus',
}
console.log(myCity.country)

myCity.city = 'Polotsk'  //точечная запись меняет или добавляет свойства объекта
myCity.cityAge = 450
console.log(myCity)

delete myCity.popular  //delete - оператор удаления, удаляет свойства объекта через точечную запись
console.log(myCity)

myCity['popular'] = false //квадратные скобки дают доступ к свойствам объекта так же как и точечная запись
console.log(myCity)

const nameOfSisterTown = 'sisterTown'
myCity[nameOfSisterTown] = 'Borisov'  //квадратные скобки пригодяться, если нужно добавить свойство в объект со значением переменной объявленной ранее. В данном примере точечная запись не подъодит, и можно использовать лишь квадратные скобки
console.log(myCity)

delete myCity[nameOfSisterTown]
console.log(myCity)

const myTable = {
    destination: 'worktable',
    material: {                  //вложенные объекты. Вложенность может быть глубокой. добраться до нужных свойств также можно через точечную запись
        tabletop: 'wood',
        feet: 'steel'
    },
    tableHeight: 80,
}
console.log(myTable)
myTable.material.feet = 'plastic'
myTable.tableHeight = 100
console.log(myTable)
myTable.design = 'transformer'
console.log(myTable)

const nameTubeBrand = 'Marlin'
const mouthpieceMaterial = 'silicon'
const snorkel={
    nameTubeBrand,          //сокращённая запись, позволяет не дублировать код, и записывать в объект наименование ранее объявленных переменных. Рекомендуется записывать превыми, дабы упростить чтение кода.
    mouthpieceMaterial,
    design:'transformer',

}
console.log(snorkel)










