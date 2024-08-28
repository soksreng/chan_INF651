// 1. Variables and Data Types
let name = "Jack"
let age = 22
let isStudent = true

console.log("Name:", name, "Data type: ", typeof name)
console.log("Age:", age, "Data type: ", typeof age)
console.log("IsStudent:", isStudent, "Data type: ", typeof isStudent)

// 2. Basic Arithmetic Operations
let age1 = 10
let age2 = 20

let age3 = age1 + age2
let age4 = age2 - age1
let age5 = age1 * age2
let age6 = age2 / age1

console.log(age3, age4, age5, age6)

// 3. Working with Strings
let line = "Front end web development"

console.log(line.length)
console.log(line[0]);
console.log(line[line.length -1]);

// 4. Math Object
let number = -1
console.log(Math.sqrt(number))
console.log(Math.pow(number,2))
console.log(Math.abs(number))

// 5. Boolean Logic and Comparison Operators
let num1 = 2
let num2 = 3

console.log(num2 > num1)
console.log(num2 < num1)
console.log(num2 == num1)

// 6. Logical Operators

let winter = true
let summer = false

let season = winter && summer
console.log("Logical AND (&&):", season)

let season1 = winter || summer
console.log("logical OR (||):", season1)

let notwinter = !winter
let notsummer = !summer

console.log("logical Not(!):", notwinter)
console.log("logical Not(!):", notsummer)

// 7. Using Template Literals

let firstname = "Sok Sreng"
let lastname = "Chan"

let greeting_message = `Hello, ${firstname} ${lastname}, Welcome to FHSU!`
console.log(greeting_message)