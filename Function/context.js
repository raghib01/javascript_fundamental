// context -> 1, Creation of context. 2, Execution of Context
//

function a(){
    b()
    console.log(`1'st Function, It's A`)
}

function b(){
    d()
    console.log(`2'nd Function, It's B`)
}

function c(){
    a()
    console.log(`3'rd Function, It's C`)
}

function d(){
    c()
    console.log(`4'th Function. It's D`)
}

var m = 100
a()
console.log('Its a global Function')