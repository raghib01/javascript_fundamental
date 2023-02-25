// var height = 60;
// var width = 80;

// var rect = {
//     height : 50,
//     width : 100 ,


//     draw:function(){
//         console.log('Its draw methodes')
//         this.printProperties()
//     },


//     printProperties:function(){
//         console.log(this.height)
//         console.log('my name is Rakibul Islam')
//         console.log('My fathers name is Shahidul Islam')
//     },

// }
// rect.draw();

// function printProperties(){
//     console.log('hellow')
// }
// // console.log(printProperties);
// var func = printProperties()

//This using global scope:
// 'this' points to global window object even if it is used in an inner function.

// var myNum = 1000;

// function myFunc(){
//     function WhatIsNum(){
//         var myNum = 2000;

//         console.log(myNum)
//         console.log('this.myNum = ' + this.myNum);
//     }
//     WhatIsNum()
// }
// myFunc()


// function WhoIsThis(){
//     alert('Hacker')
// }

// WhoIsThis();
// WhoIsThis.call();
// WhoIsThis.apply();


//Implicit binding-------------
// Ex:1
// var sakib = {
//     name: 'sakib',
//     age: 35,

//     nameDetails: function(){
//         console.log('Player 78, Name is ' + this.name)
//     }
// }

// sakib.nameDetails()

//Ex:2 

// var printNameFunc = function(obj){
//     obj.printPlayerName = function(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.short)
//     }
// };

// var sakib = {
//     name: 'Sakib Al Hasan',
//     age: 35,
//     short: 'Left Hand',
// }

// var tamim = {
//     name : 'Tamim Iqbal',
//     age: 38,
//     short: 'Right Hand'
// }

// printNameFunc(sakib);
// printNameFunc(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();


// var printName = function(){
//     console.log(` Name is : ${this.name}, & age : ${this.age}`)
// };

// var sakib = {
//     name: 'Sakib Al Hasan',
//     age: 30,
// }

// var tamim = {
//     name: 'Tamim Iqbal',
//     age: '37',
// }

// printName.call(sakib, tamim)


        // ++++++++++Factory design pettern--------------

// do not code reapeat... DRY

// factory akta function jeti object toiri kore return korbe......

// var createRect = function(width, height){
//     return {
//         width: width,
//         height: height,

//         draw: function(){
//             console.log(`this rectangle width is ${width} and height is ${height},`)
//         },

//         area: function(){
//             console.log('Area of rectangle is : ' + width * height )
//         }
//     }
// }

// var rect1 = createRect(10, 20)
// rect1.draw()
// rect1.area()


        //++++++++++Constractor pettern--------------------

// var constructorRectangle= function(width, height){
//     this.width = width
//     this.height = height

//     this.properti = function(){
//         console.log(`Rectangle Width is : ${width} & Height is : ${height} `)
//     }
//     this.Area = function(){
//         console.log(`Rectangle Area is : ` + width * height)
//     }
// }
// var rect =new constructorRectangle(5, 6)
// rect.properti()
// rect.Area()


        // NEW keyword in js.................-----
        // create myNew keyword inset NEW 
// function myNew(constructor){
//     var obj = {

//     }

//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))

//     return obj

// }

// var rect = myNew(constructorRectangle, 10, 54)
// rect.properti()
// rect.Area()

    //Javascript function a special type of object.
    // +++++++++++++Unic function diclaretion System ---------------
// var rect = new Function('width', 'height', 
// `this.width = width
// this.height = height

// this.properti = function(){
//     console.log('Height is : ' + this.height)
//     console.log('Width is : ' + this.width)
// }`
// )

// var rect2 = new rect(4, 5)
// console.log(rect2)
// rect2.properti()

    // Example 2
    // function o ek dhoroner object . nahole ei properti gulo kivabe access kora jabe. jegulo exicutable. & jegulo invoke kora jay.

// function object(){
//     console,log('something')
// }
// console.log(object.name, object.length)

// const sum = (x, y) => {return x+y};
//const sum = (x, y) => x + y;
// const sum = x => x*x + 2*x + 3;
// console.log(sum(4))

// example of an arow function...
// const f = x => {if (x < 1) return 1;  else return x*(x -1)}

// console.log(f(5))


// var constructorRectangle= function(width, height){
//         this.width = width
//         this.height = height
//          var position = {
//                 x: 50,
//                 y: 60,
//         }
//         var properti = function(){
//             console.log(`Rectangle Width is : ${width} & Height is : ${height} `)
//         }
//         // this.getPosition = function(){
//         //         return properti
//         // }

//         this.Area = function(){
//             console.log(`Rectangle Area is : ` + width * height)
//         }

//         Object.defineProperty(this, 'properti', {
//                 get: function(){
//                         return properti
//                 }
//         })
//         Object.defineProperty(this, 'position', {
//                 get: function(){
//                         return position
//                 }
//         })



// }


// var rect = new constructorRectangle(5, 6)
//     rect.Area()
// //    console.log(rect.getPosition())
//         rect.properti()
//         console.log(rect.position)



// var myFunc = function(names, age){

//         this.names = names
//         this.age = age
//         var local = {
//                 lname : 'Ragib',
//                 lage : '20',
//         }

//         var address = console.log('my name is ' + this.names + ' and age is '+ this.age)

//         Object.defineProperty(this, 'myaddress',{
//                 get: function(){
//                         return address
//                 }
//         })

//         this.plocal = function(){
//                 console.log(`local name is ${local.lname} and age is ${local.lage}`)
//         }
// }

// var n = new myFunc('rakibul islam', 30)
// n.plocal()
// n.address = 'my adress';
// console.log(n.address)
