/* Opposite number

Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34 */

function opposite(number) {
  let oppNum = 0 - number
  return oppNum
}

console.log(opposite(11))

/* Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

function basicOp(operation, value1, value2)
{
  switch(operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
  }
}

console.log(basicOp('*', 3, 2))


/* Printing Array elements with Comma delimiters

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕 */

function printArray(array){
  return array.toString()
}

console.log(printArray([['h', 'e', 'l', 'l', 'o']]))

/* Can Santa save Christmas?

Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) . */

function determineTime (durations) {
  let hours = 0
  let minutes = 0
  let seconds = 0
  durations.map(time => time.split(':').map((time, i) => i === 0 ? hours += time * 1 : i === 1 ? minutes += time * 1 : seconds += time * 1))
  minutes += seconds / 60
  hours += minutes / 60
  return hours <= 24
}


/* Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

function getMiddle(s)
{
  return s.slice((s.length - 1) / 2, s.length / 2 + 1)
}

console.log(getMiddle('god'))
console.log(getMiddle('good'))
console.log(getMiddle('middle'))