
/**
 * DOM MANIPULATION:💻💻
 * 
 * Jo bhi ham website par dekhte hai vo sab HTML body me hota hai. 🧑‍🦱🧑‍🦱🧑‍🦱
 * HTML body me jo hota hai vo sab DOM (Document Object Model) me hota hai. 
 * DOM ek tree ki tarah hota hai jisme har ek element ek node hota hai.💵💵💵
 * 
 * DOM manipulation ka matlab hai kisi bhi element ko change, delete, add, hide, show, move, copy, ya paste karna.
 */
//?DOM MANIPULATION:💻💻
//jo bhi ham website  par dekhte hai vo sab html body me hota hai. html body me hota hai vo sab DOM(Document Object Model) me hota hai. DOM ek tree ki tarah hota hai jisme har ek element ek node hota hai. 
//DOM manipulation ka matlab hai kisi bhi element ko change, delete, add, hide, show, move, copy, ya paste karna.

//!topics:
//1. DOM Elements
//=================

//accessing elements
//⭐⭐⭐document.querySelector()⭐⭐⭐//access any element by 
var btn = document.querySelector("#btn");

//1. getElementById()//*id
 var name =document.getElementById("btn").style.color = "red";

//2. getElementsByClassName()//*class
document.getElementsByClassName("btn");
document.getElementsByClassName("heading");

//3. getElementsByTagName()//*tag
document.getElementsByTagName("button");

/*modifying elements:✅
elements me changes kar pana after selecting them.
EX:*/
//1. textContent
 var button = document.querySelector("#btn")
 button.textContent = "Click Me";//change the text of button

 
var head = document.querySelector("h1");
head.textContent = "Hello World";//change the text of h1
head.textContent += "Hello World";//pahele se jo text hai uske sath add karne ke liye

//4. innerHTML
var head = document.querySelector("h1");
head.innerHTML = "<em>Hello World</em>";//change the text of h1 with em tag


//?when we use innerHTML then we can use html tags also.
//when we want to change the text of element with some html tags then we use innerHTML and when we want to change the text of element without html tags then we use textContent.

//5.style
var head = document.querySelector("h1");
head.style.color = "red";//change the color of h1
head.style.fontSize = "50px";//change the font size of h1
head.style.backgroundColor = "black";//change the background color of h1


//6. classList: ye element ke class ke sath ko change karne ke liye hai.
var h1 =  document.querySelector("h1");
h1.classList.add("heading");//add class to h1
h1.classList.remove("heading");//remove class from h1

//Creating and Deleting elements:✅
//1. createElement()
var btn = document.createElement("button");//create a button element
btn.textContent = "Click Me";//add text to button
document.body.appendChild(btn);//add button to body

//2. removeChild()
var btn = document.querySelector("#btn");//select button
document.body.removeChild(btn);//remove button from body

//3. replaceChild()⭐⭐
var btn = document.querySelector("#btn");//select button
var btn2 = document.createElement("button");//create a button element
btn2.textContent = "Click Me";//add text to button
document.body.replaceChild(btn2,btn);//replace button with button2


//Event Handling:✅
//jab bhi ap kisi bhi element par koi action karte ho to towaha par event by default automatically raise hota hai ab agar aapne koi event listener nahi banaya hai to wo event ignore nahi kiya jaayega balki uska listener chalega

var btn = document.querySelector("#btn");//select button
btn.addEventListener("click",function(){//add event listener
    alert("Button Clicked");//show alert on button click
   btn.style.backgroundColor = "red";//change background color of button
});
//event for event listener⭐⭐⭐
//1. click , double click, mouseover, mouseout, keydown, keyup, keypress, change, input, submit, focus, blur, load, resize, scroll, etc.



//Event object:✅

//mouse ke move hone par event object show karega.
document.querySelector("body")
.addEventListener("mousemove",function(event){
    console.log("emoving");//show event object
});

//mouse ke sath circle move karega.
document.querySelector("body")
.addEventListener("mousemove",function(event){
    console.log("emoving");//show event object
    document.querySelector("body").style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},100)`;//change background color of body   
})



alert("Button Clicked");//show alert on button click


//2. DOM Collections
//3. DOM Traversing