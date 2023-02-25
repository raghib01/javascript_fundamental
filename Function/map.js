var arr = [1, 2, 3, 4, 5]


// var result = arr.map(function(value, index, arr){
//     // return Math.random() * value
//     return value * value
// })

// console.log(arr)
// console.log(result)


function myMap(arr, cb){
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        var temp = cb(arr[i], arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = myMap(arr, function(value){
    return value * value * value
})
var mTen = myMap(arr, function(value){
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mTen)



