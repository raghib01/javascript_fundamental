// class car {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     run(speed){
//         console.log(this.name  + ' Is running. ' + speed)
//     }
// }

// const bmw = new car('BMW Lambhorgini', 2020);
// bmw.run('its speed is 100 mile per hour');
// console.log(bmw);

// _________Javascript inheritance............

// class car {
//     constructor(brand){
//         this.brand = brand;
//     }
//     present (){
//         return 'i have a ' + this.carName; 
//     }
// }

// // Object class
// function range(from, to){
//     let r = Object.create(range.methods);

//     r.from = from;
//     r.to = to;

//     return r
// }
// range.methods = {
//     include(x){
//         return this.from <= x && x <= this.to;    
    
//     },

//     toString(){
//         return "(" + this.from + "..." + this.to;
//     }
// }



// const totalRange = range(30, 50)
// console.log(totalRange)

class car{
    constructor(Brand){
        this.carname = Brand;
    }
    have(){
        return 'I have a ' + this.carname;
    }
}

class model extends car{
    constructor(brand, model){
        super(brand);
        this.carModel = model;
    }

    show(){
        return this.have() + ' and model is '+ this.carModel;
    }
}

let mycar = new model('BMW', 'Lamborghini')
console.log(mycar.show())


