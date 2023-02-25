// function mainPerson(name, age){
//     this.name = name;
//     this.age = age;

// }

// function newCricketer(name, age, type, country){

//     mainPerson.call(this)
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;

// }

// mainPerson.prototype = {
//     play: function(){
//         console.log(`${this.name} is playing`);

//     }
// };
// newCricketer.prototype = Object.create(mainPerson.prototype) //connected with let sakib
// newCricketer.prototype.constractor = newCricketer;
// newCricketer.prototype.play = function () {
//     console.log(`${this.name} playing cricket`);
// }

// let sakib = new newCricketer('Sakib Al Hasan', 34, 'left Hand', 'Bangladesh');
// console.log(sakib.name);
// console.log(sakib.play());

// USING CLASS PROPERTIES.......
// class Person{
//         //parent class
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(this.name + ' is eating')
//     }
// }

// class cricketer extends Person{
//     //child class
//     constructor(name, age, type, country){
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }


//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }

// let sakib = new cricketer('Sakib', 35, 'Allrounder', 'bangladeshi')
// console.log(sakib.eat())
// let tamim = new Person('tamim')
// console.log(tamim.eat())



// GETTER &  SETTER:

// class person{
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }

//     eat(){
//         console.log(`${this.name} is eating ${this.type}`)
//     }

//     static isEqualAge(){
//         console.log(`I am a student`)
//     }
// }

// let p1 = new person('MS Mahindra', 'Barger');
// console.log(p1.eat())
// person.isEqualAge() //not to use any object.

