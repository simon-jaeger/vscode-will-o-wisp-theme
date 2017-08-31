// javascript

let number = 42
let string = 'the meaning of life'
let templateLiteral = `${string} is ${number}`
let regex = /foo.*[bar][:alpha:]{3}/
let boolean = true
let array = [1, 2, 3]
let object = { foo: 'bar' }
const arrowFunction = (foo, bar) => `${foo} ${bar}`

function add(x, y) {
  return x + y
}
add(40, 2)

switch (number) {
  case 42:
    console.log('the meaning of life')
    break
  case 7:
    console.log('a lucky number')
    break
  default:
    console.log('default')
}

if (Math.random() > 0.5) {
  console.log('heads')
}
else {
  console.log('tails')
}

true ? true : false

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width
  }

  grow() {
    this.height++
    this.width++
  }
}
const square = new Rectangle(10, 10)
square.grow()
console.log(square.area)