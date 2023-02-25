function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result

}

function sum(a, b){
    return a + b
}

var res = sample(5, 8, sum)
console.log(res)

var res2 = sample(4, 3, function(c, d){
    return c - d
})
console.log(res2)

var res3 = sample(5, 8, function(c, d){
    return c * d
})
console.log(res3)