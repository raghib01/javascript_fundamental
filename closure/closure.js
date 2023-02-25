var num1 = 2
var num2 = 3

var sum = function(){
     return function(){
         return num1 + num2
     }
}
var myFunc = sum()
console.log(myFunc)

