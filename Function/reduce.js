var arr = [1, 2, 3, 4, 5, 6]

// -------Using redue method
// var sum = arr.reduce(function(prev, curr){
//     return prev + curr
// }, 10)

// console.log(sum)

// var max = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// }, 0)

// console.log(max)

// var total = arr.reduce(function(sum, item){
//     return sum += item
// })

// console.log(total)

//--------Create A reduce method

function myReduce(value, cb, acc){
    for(var i = 0; i < arr.length; i ++){
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)

console.log(sum)

var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, 0)
console.log(max)