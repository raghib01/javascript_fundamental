// Example1,,
// A simplest curring function;;;
function curry(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}

console.log(curry(5)(6)(7))

// real time Example...

function discount(disc){
    return function(price){
        return price - price * disc;
    }
}

var tenPercentDiscount = discount(0.1); //partial function
var twentyPercentDiscount = discount(0.2); //partial function 
var customer1 = tenPercentDiscount(600)
console.log(customer1)
// var customer2 = tenPercentDiscount(800)
// console.log(customer2)
// var customer3 = twentyPercentDiscount(1200)
// console.log(customer3)
var cusromer4 = twentyPercentDiscount(2000)
console.log(cusromer4)


// curry converter-------
function curry(func){
    return function curried(...args){
        if(args.length >= func.length ){

        }
    }
}

function sum(a, b, c){
    return a + b + c
}

var curriedSum = curry(sum);


console.log(curriedSum(1, 2, 3))
console.log(curriedSum((1) (2, 3)))
console/log(curriedSum((1)(2)(3)))




