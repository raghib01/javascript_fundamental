var person = [
    {
        name : 'Khalek',
        age : 20
    },
    {
        name : 'Ismail',
        age : 18
    },
    {
        name : 'Rakib',
        age : 19
    },
    {
        name : 'abdullah',
        age : 21
    }
]

result = person.sort(function(a, b){
    if(a.age > b.age){
        return 1
    } else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(result)