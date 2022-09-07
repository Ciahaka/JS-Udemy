const a = 10
let b = a  // копирование значения (copy by value)
b = 30
console.log(a)
console.log(b)

const myNewTable = {
    destination: 'worktable',
    material: {
        tabletop: 'wood',
        feet: 'steel'
    },
    tableHeight: 80,
}
// const myNewTable2 = myNewTable    //<--- мутирование объекта через копию
// const myNewTable2 = Object.assign({}, myNewTable)  // <--- создание нового объекта при помощи  метода assign
// помогает избежать мутирование оригинального объекта. Не работает на вложенных объектах!!
// const myNewTable2={...myNewTable}  //<--- создание нового объекта при помощи оператора разделения объекта
// на свойства Spread. оператор Spread так же не работает со вложенными объектами.
const myNewTable2=JSON.parse(JSON.stringify(myNewTable)) //<--- создание нового объекта превращением его в строку и обратно в объект. Работает со вложенными объектами!
// myNewTable.tableHeight = 120
// myNewTable.construction = 'Transformer'
myNewTable2.tableHeight = 120
myNewTable2.construction = 'Transformer'
myNewTable2.material.feet = 'Plastic'   //<--- метод assign не работает со вложенными объектами, поскольку ссылки на вложенные объекты сохраняются!
console.log(myNewTable)
console.log(myNewTable2)
console.log(myNewTable.destination)
console.log(myNewTable2.destination)
console.log(myNewTable.material.tabletop)
console.log(myNewTable2.material.tabletop)
console.log(myNewTable.tableHeight)
console.log(myNewTable2.tableHeight)