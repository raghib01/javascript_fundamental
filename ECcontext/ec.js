//  var topic = 'Javascript Execution context';

//  function getTopic(){
//      return topic
//  }

 getTopic()

var a = 1;

function one(){
    console.log(a); //1
    function two(){
        console.log(b); //undefined
        var b = 2;
        function three(){
            console.log(c + d) //referenceError
            let c = 3
        }
        three(4);
    }
    two();
}
one()


function am(){
    console.log(fr); //undefined
    var fr = 1212
}

am()