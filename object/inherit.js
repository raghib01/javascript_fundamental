// let person = {
//     name: 'Rakibul Islam',
//     age: 55,
//     type: 'new',
//     creational: 'Sw Eng',
// };

//console.log(person)

// for( var i in person){
//     console.log(i)
// } 

// console.log(Object.keys(person))

// var descriptor= Object.getOwnPropertyDescriptors(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptors(baseObj, 'name')
// console.log(descriptor)
// //enumirable false means etake kono key access nite parbe na.

// Object.defineProperty(person, 'age',{
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'Ragib Hasan',
// })

// console.log(Object.keys(person))

// writable false means etake kothao hoe write kora jabena
//configareble false means etake kothao theke configure kora jabe na.


//Instance vs prototype member.....

// function Squre(width) {
//     this.width = width;
//     this.getWidth = function() {
//         console.log('Width is ' + this.width)
//         // this.draw() //access in prototype.
//     }
// }
// Squre.prototype = {
//     draw: function(){
//         this.getWidth() //access in instance method.
//         console.log('Its draw method')
//         //this.getWidth() //cerculler relationship
//     },
//     toString: function(){
//         return 'my with is = ' + this.width   // access in instance properties                                                                       
//     }
// }

// var sqr = new Squre(10)
// var sqr1 = new Squre(5)


// var c = sqr.hasOwnProperty('draw') //false
// console.log(c)

// console.log(Object.keys(sqr)) //not showing prototype property

// for(var i in sqr){ 
    //Sob property show korbe.....
//     console.log(i)
// }

// function Shape(color){
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('It common methode')
// }

// Squre.prototype = Object.create(Shape.prototype)
// Squre.prototype.constructor = Squre

// function Squre(width, color) {
//     //parent function er sathe child function bind kore dea holo
//     Shape.call(this,color)
//     this.width = width
// }

// Squre.prototype.draw = function(){
//     console.log('its Drawing')
// }

// var sqr = new Squre(45, 'green')
// console.log(sqr)


function extend(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Name(myname){
    this.myname = myname;
}

// Name.prototype.common = function () {
//     console.log('Its Common metode')
// }

function Age(years, myname) {
    Name.call(this, myname);
    this.years = years;
    
}

// Age.prototype = Object.create(Name.prototype);
// Age.prototype.constructor = Age;



var name1 = new Age(22, 'Rakibul Islam')
console.log(name1)

