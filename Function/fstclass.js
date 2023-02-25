//first Class Function

function add(a, b){
    return a + b
}

// 1. A function can be stored in a variable
var sum = add
console.log(sum(4, 6))

// 2. A function can be stored an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](4,5))
    
// 3. A function can be stored in an Object

// 4. function can be create as need

// 5. We can pass function as an arguments

// 6. We can return function from anothor function.

var a = 10
do {
    a += 1
    console.log(a)
} while (a<5);