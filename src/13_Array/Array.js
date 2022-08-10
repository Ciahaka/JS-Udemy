//Два способа записи массивов
const myArray = [1, 2, 3]  //создание нового массива посредством квадратных скобок
console.log(myArray)

const myArray_2 = new Array(1, 2, 3) //<--- создание нового массива, путём создания класса Array
console.log(myArray_2)
//массив myArray не равен массиву myArray_2, поскольку массив это объект (ссылочный тип), и при создании нового
// массива образуется новая ячейка памяти. Переменные хранят ссылки на разные ячейки памяти!

const room = [1, true, 'Table']
console.log(room)

const room_2 = [1, true, 'Table'] //обратиться к элементу массива, изменить его, добавить  -  можно посредством
// квадратных скобок, обрамлённых вокруг индекса элемента
console.log(room_2)
console.log(room_2[1])
console.log(room_2[2])
console.log(room_2.length)

const room_3 = [1, true, 'Table']   //но для изменения элементов массива, существуют методы -функции высшего порядка,
// которые наследуют все массивы и JS
room_3 [3] = 'absd'
console.log(room_3)
room_3 [2] = 20
console.log(room_3)
console.log(room_3.length)

const protoType = [1, 3, 'kub', true]
protoType.push(false)                //метод .push добавляет в конец массива новый элемент массива (метод ожиданные
// значение, чтобы добавить его в новый элемент в конце массива)
protoType.pop()                      //.pop удаляет последний элемент массива, вызывается без аргументов функции
const removeElement = protoType.pop()  //так же .pop может вернуть значение удалённого элемента переменной, если
// присвоить метод ей
protoType.unshift('good')       //методы .unshift и .shift работают аналогично предыдущим, но работают с первыми элементами массива. Менее популярны, видимо из-за того, что сдвигают порядок индексов элементов
protoType.shift()
const removeElement_2 = protoType.shift()
const removeElement_3 = protoType.shift()
console.log(protoType)
console.log(removeElement_3)
///все эти методы не создаютновый массив и мутируют исходный оригинальный!
console.log('break ')

const myForEach = [1, 5, 8]
myForEach.forEach((el) => console.log(el * 2))  //метод .forEach содержит функцию и пробегая по всем элементам
// массива вызывает эту функцию(колбэк-функцию(анонимная стрелочная функция в примере)) для каждого элемента массива.
console.table(myForEach) // <--- При этом .forEach не создаёт новый массив, просто переберает не мутируя оригинал

const myMap = [1, 2, 3, 4]
console.log(myMap)
const myNewMap = myMap.map(el => el * 3) //метод .map пробегает по всем эементам исходного массива, вызывая заданую колбэк
// функцию для кажого элемента и на основе изменённых элементов создаёт новый массив, не мутирую оригинал. Работает
// схоже с .forEach , но при этом создаёт новый массив записывая результаты прохода туда.
console.table(myNewMap)

//Запись выше возвращает результат неявно. Для явного возвращения результата необходиммо добавить ключевое слово return и фигурные скобки
const myMap_2 = [10, 0, 1, 7]
console.log(myMap_2)
const myNewMap_2 = myMap_2.map((el) => {
    return el * 3
})
console.table(myNewMap_2)

//так же можно записать это выражение при помощи анонимного функционального выражения, для этого нужно убрать => и добавить ключевое слово function
const myMap_3 = [6, 2, 5, 9, 11]
console.log(myMap_3)
const myNewMap_3 = myMap_3.map(function (el) {
    return el * 3
})
console.table(myNewMap_3)






