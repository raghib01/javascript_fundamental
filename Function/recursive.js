function myName(n){
    if( n === 0){
        return 0
    }

    console.log("Hi! I'm Rakibul Islam")
    myName(n - 1)
}

myName(5)

function sum(n){
    if(n === 1){
        return 1
    }

    return n + sum(n - 1)
}

