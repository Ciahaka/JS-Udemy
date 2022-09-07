/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [                       //это не один объект JSON, а массив JSON,. Нам нужно вызвать метод parse 4 раза! поэтому конвертируем в массив
// объектов с помощью map
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]
console.log(postsJSON)
const resPostJS = postsJSON.map((post)=>JSON.parse(post))
console.log(resPostJS)
/**
 или же
 */
const resPostsJSON = postsJSON.map(JSON.parse)
console.log(resPostsJSON)

//таска 3
console.log(resPostsJSON[1].postId)
//таска 4
console.log(resPostsJSON[3].commentsQuantity)
/**
 или же
 */
console.log(resPostsJSON[resPostsJSON.length-1].commentsQuantity)
