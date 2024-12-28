// onmessage = function(data){
//     data.data.reduce((acc,items)=>{//acc=0,items=1
//         acc+=items;//1+2+3+4+5+6+7+8+9+10
//     },0);//0
//     postMessage(data);//send data to main thread
// }
// //genteators: Generators are functions that can be paused and resumed. They are created using function* syntax. When called, generator functions do not execute their code. Instead, they return a special type of iterator, called a Generator.
// function* allnum(){
//     for(let i=1;i<10;i++){
//         yield i;
//     }
// }
// const num=allnum(); //return object
// console.log(allnum().next().value);//1
// //find 
// console.log(num.next().value);//the valur is to be goverend by the yield keyword
// //prime number using generator
// function* prime(){
//     yield 2;
//     let num=3;
//     while(true){
//         let flag=0;
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 flag=1;
//                 break;
//             }
//         }
//         if(flag==0){
//             yield num;
//         }
//         num++;
//     }
// }
// //Webworkers:
// //Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML property is disabled) or Web Sockets.


// //*THREAD ---> A thread is a sequence of computational tasks that are executed by a single processor. 
// //js is single threaded language.


// //?Web Workers:
// // usually hamara pura code single thread par chalta hai par kabhi bari kaam karne par jate hai jise apka main thread busy ho jata hai ya phir vo kafi jaada loaded hojata hai aur aapke baaki tasks ki performance kam ho jaati hai
// //  //*isliye hum web workers ka use karte hai jo ki ek background thread hota hai jo aapke main thread ko block nahi karta hai aur aapke tasks ko perform karta hai.

// new Worker('worker.js');//worker.js file ko run karega.
// //aap apni main js file se data send kar sakte ho and app worker file data accept karoge and jo perform karna hai vo perform karega.and waha se data waapas bhejega mian file me.
// //
// var aarr = Array.from({length: 100}, (_,b) => b+1);//1 se 100 tak ka array banaya.
// console.log(aarr);
// const worker = new Worker('worker.js');//worker.js file ko run karega.


// //worker.js me data send karega.
// worker.postMessage(aarr);//worker.js me data send karega.

// //onmessage event ko use karke worker.js se data receive karega.    
// worker.onmessage = function(data) {
//     console.log(data.data);
// }
//  var btn = document.querySelector("#btn");
//     btn.addEventListener("click",function(){
//     alert("Button Clicked");
//     });


 
document.querySelector("body")
.addEventListener("mousemove",function(event){
    console.log("emoving");//show event object
    document.querySelector("body").style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},100)`;//change background color of body   
})


//


