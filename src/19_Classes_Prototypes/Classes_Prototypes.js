//Классы позволяют создавать прототипы для объектов. На основании прототипов создаются экземпляры. Они независимы друг
// от друга и каждый обладает своими свойствами и методами. Экземпляры могут наследовать  свойства и методы
// родительских прототипов

//Пример класса
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment('two comment')
const thirdComment = new Comment('Third comment')

firstComment.hasOwnProperty('text')
firstComment.hasOwnProperty('votesQty')
firstComment.hasOwnProperty('upvote')
firstComment.hasOwnProperty('hasOwnProperty')

secondComment.upvote()
console.log(secondComment.votesQty)
secondComment.upvote()
console.log(secondComment.votesQty)
console.log(firstComment)

console.log(firstComment instanceof Comment) /// проверка принадлежности классу Comment
console.log(firstComment instanceof Object)
console.log(firstComment instanceof Array)    ///не наследует методы массива - false

firstComment.upvote()               //  при выове метода upvote, this указывает на объект firstComment (экземпляр класса
// Comment)
console.log(firstComment.votesQty)
firstComment.upvote()
firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)


class NewComment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeNewComment(first, second) {
        return `${first} ${second}`
    }
}
const newFirstComment = new NewComment('My First comment')
NewComment.mergeNewComment('My First comment.', 'My Second comment')
console.log(NewComment.mergeNewComment('My First comment', 'My Second comment')
)
console.log(NewComment.mergeNewComment)

class NumbersArray extends Array {      // extends(расширить) класс NumbersArray расширяет родительский класс Array на
    // ещё один метод sum()
    sum(){                              // конструктор для класса NumbersArray не нужен, так он автоматически
        // наследуется от класса Array
        return this.reduce((el,acc)=> acc+=el,0)
    }
}
const nextArray = new NumbersArray(2,5,7)      // при создании нового экземпляра класса NumbersArray, вызывается
// конструктор родительского класса Array, и this уже ссылается на новый   созданный экземпляр массива. Поэтому
// доступен такой метод как reduce.
console.log(nextArray)     // результат вызова  - массив
console.log(nextArray.sum())







