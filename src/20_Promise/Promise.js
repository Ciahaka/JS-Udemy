const bestPromise = new Promise((resolve, reject) => {
    //выполнение ассинхронных действий
    //внутри этой функции нужно вызывать одну из функций параметров колбэка: в зависимости от результата ответа от сервера. Вызываеться resolve при выполнении промиса и reject - при возникновении ошибки
})

    //Результат промиса можно получить при помощи методов .then и .catch
    .then((value) => {
        //внутри блока выполняется действие при случае успешного получения результата и выполнения промиса.
        // значение value === значению resolve
    })
    .catch((error) => {
        // внутри блока выполняется действие при случае возникновения какой-дибо ошибки
        //значение error === reject
    })

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error))

const getData = (url) =>
    new Promise((resolve,reject)=>  ///кастомный промис
       fetch(url)
           .then((response)=> response.json())
           .then((jason)=> resolve(jason))
           .catch((error)=> reject(error))
    )
getData('https://jsonplaceholder.typicode.com/todos/6')
.then((data)=>console.log(data))
.catch((error)=>console.log(error.message))