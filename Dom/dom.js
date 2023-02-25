//console.log(typeof(document))

//document.title = 'Play with Dom';
// console.log(document.all)


// we can itarete throw it.

// for(let element of document.all){
//     console.log(element)
// }
//not access this methode
//console.log(document.all[7])


//image get korar jonno.
// console.log(document.images)
// console.log(document.links)
// console.log(document.forms)

// __---____3RD LECTURE

// -------GET ELEMENT BY ID.......

// let headerContent = document.getElementById('header');
// console.log(headerContent.textContent) //displaying html content
// console.log(headerContent.innerText) //displaying browser output
// console.log(headerContent.innerHTML) //displaying inner html

// console.dir(headerContent)

// headerContent.style.color = 'Blue';
// not using css style in -;

// headerContent.style.font-size = '50px' ; //its take a error
// headerContent.style.fontSize = '50px'; // cool. working it

//------ Document  GET ELEMENT BY CLASS

// let itemUl = document.getElementById('items')
// let classItem = itemUl.getElementsByClassName('item');

// for(i = 0; i < classItem.length; i++){
//     classItem[i].style.color = 'green';
// }

//---------DOCUMENT BY GET ELEMENT BY TAGNAME

// let tagItem = document.getElementsByTagName('li')
// console.log(tagItem)


//----Query Selector

// let header = document.querySelectorAll('.item:last-child');

// nth child using this....
// let header = document.querySelector('.item:nth-child(2)');
// header.style.color = 'black' ;
// console.log(header)

// for(let element of header){
//     element.style.color = 'black' ;
// }

//---- ------- parent child relation.......

//parent to child...

// const grandParant = document.querySelector('.todo-list');
// // const parant = document.querySelector('#items');
// //const parant = grandParant.children;
// //const children = parant[1].children;

// //decendent order rules......
// const children = grandParant.querySelectorAll('.item');

// console.log(children)

// child to parant.....

// const children = document.querySelector('.item')

// ancestor.....
// const grandParant = children.closest('.todo-list');
// console.log(grandParant)

// side by side...SIBLING

// const childOne = document.querySelector('.item');
// const childTwo = childOne.nextElementSibling;
// childTwo.style.color = 'red';
// console.log(childTwo)

// const childTwo = document.querySelector('.item').nextElementSibling;
// const childOne = childTwo.previousElementSibling;
// childOne.style.color = 'red';
// console.log(childTwo)

// ------ Manipulate Dom....

// Creating a dom element......
// const divElement = document.createElement('div')
// divElement.className = 'green';
// divElement.setAttribute('id', 'red');

// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');

// container.insertBefore(divElement, h2Element)

//******APEND and APPENDCHILD...

// html text element use kora jy na
// Appendchild sudhu append e kore na eta return kore day.
// const a = container.appendChild(divElement)
// console.log(a)
// Aksathe onkgulo child input dea jy nah.
// container.appendChild(divElement)

// Html text element use kora jy
// Append undifined return kore sudhu.
// Aksathe onkgulo child input dea jy. 
// container.append(divElement, document.createElement('p'), 'Hello world')


// console.log(divElement);


