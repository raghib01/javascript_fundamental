var arr = [5, 2, 3, 9, 6, 7, 3, 8]

// By default filter.....
// Filter Search way System.....
// var filterArray = arr.filter(function(value){
//     return value % 2 !== 0
// })

// console.log(filterArray)

//Using callback create a filter function.
function myFilter(arr, cb){
    var newArr = []
    for( var i = 0; i < arr.length; i++){
        // if(arr[i] % 2 === 0){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(myFilter(arr))
console.log(arr)
console.log(myFilter(arr, function(value){
    return value % 2 === 0
}))

console.log(myFilter(arr, function(value){
    return value % 2 != 0
}))



