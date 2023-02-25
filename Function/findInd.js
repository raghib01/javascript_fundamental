var arr = [1, 6, 7, 9, 4, 12, 88]

// var rslt = arr.find(function(value, index){
//     return value === 9
// })

// console.log(rslt)

function myFind(arr, cb){
    for(var i = 0; i < arr.length; i ++ ){
        if(cb(arr[i])){
            //return arr[i]
            return i
        }
    }
}

var result = myFind(arr, function (value) {
    return value === 12
})
console.log(result)

