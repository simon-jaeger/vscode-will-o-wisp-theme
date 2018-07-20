// javascript

import * as foo from './foo.js'
export * from './bar.js'

// will-o-wisp

let variousValues = [
  123, 424242,
  true, false,
  'foobar\n',
]
variousValues.forEach(x => console.log(x))

function add(x, y) {
  return x + y
}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.

let numeric = 42 || NaN || Infinity
let string = 'the meaning of life\n'
let templateLiteral = `${string} is ${numeric}`
let regex = /^foo*[bar](one|two)\sfoo\nbar[:alpha:]{3}(?=ahead).+baz$/
let boolean = true
let languageConstant = null || undefined
let array = [1, 2, 3]
let object = { foo: 'bar' }
const arrowFunction = (foo, bar) => `${foo} ${bar}`

function add(x, y) {
  return x + y
}
add(40, 2)

switch (numeric) {
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

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
*/

Number()
String()

true ? true : false

class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
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

class Sub extends Foo {
  constructor() {
    super()
  }
}
