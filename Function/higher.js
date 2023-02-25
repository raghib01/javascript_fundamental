function add(a, b){
    return a + b
}

function mutiple(a, b, func){
    var x = a + b
    var y = a - b

    function mlt(){
        var c = func(a, b)
        return x*y*c
    }
    return mlt
}

var m = mutiple(3, 4, add)
console.log(m())
