// Change header
const myHeader = document.querySelector('h1');
myHeader.textContent = "Hello from Javascript";

//Declare, call and change variable 
//let myVariable = 'Name';
//Name;
//Name = 'newName';

//Declare and call Array
//let myVariable = ['Bob', 10];
//myVariable[0];

//Object
//let myVariable = document.querySelector('h1');

//Call an alert box
//alert('Hello!'); /* Like document.querySelector this is 
//built into the browser*/ 

//Change image when clicked
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/pexels-julie-aagaard-3144205.jpg"){
        myImage.setAttribute('src', 'images/pexels-vlad-bagacian-2819546.jpg');
    } else {
        myImage.setAttribute('src', 'images/pexels-julie-aagaard-3144205.jpg')
    }
}

//Change header with button click, using the header reference from above
let myButton = document.querySelector('button');

myButton.onclick = function setHeader(){
    let myName = prompt('What is your name ?');
    if(!myName){
        //setHeader(); /* runs the function until a name is entered*/ 
        return;
    } else {
        localStorage.setItem('name', myName);
        myHeader.textContent = 'Javascript is cool, ' + myName + ' !';
    }
}