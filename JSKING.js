//Create a new promise that resolves or rejects based on the gender of the user returned by the API
// const promise2 = new Promise((resolve, reject) => {
//   //Fetch the API
//   fetch("https://randomuser.me/api")
//     .then(raw => raw.json())
//     .then(result => {
//       //If the user is a male, resolve the promise
//       if (result.results[0].gender === "male") {
//         resolve();
//       } else {
//         //If the user is not a male, reject the promise
//         reject();
//       }
//     });
// });

// //Log the promise to the console (it will be a "pending" promise)
// console.log(promise2); //parchi 

// //Add a then and catch block to the promise
// promise2
//   .then(() => console.log("Promise resolved"))
//   .catch(() => console.log("Promise rejected"));





// axios.get("https://randomuser.me/api/")
//   .then(({ data }) => console.log(data))
//   .catch(console.error);




// Define a function named 'call_user_data' that takes two parameters:
// 'url' (a string representing the API endpoint) and 'callback' (a function to process the data)
function call_user_data(url, callback) {
  // Use the fetch API to make a network request to the specified 'url'
  fetch(url)
    // Once the network request is successful, convert the response to JSON format
    .then(res => res.json())
    // Once the JSON conversion is successful, execute the 'callback' function
    // passing the JSON data as an argument
    .then(callback);
}

call_user_data("https://randomuser.me/api",function(data){
  console.log(data.results[0].gender, data.results[0].email,data.results[0].name.first);
})

//event loop:it checks if the main stack is empty or not if is then it will excute side stack operation
function datafetch(url,callback){
  fetch(url)
  .then(raw => raw.json())
  .then(result =>{
console.log(result)
  })
}
datafetch("https://randomuser.me/api",function(result){
  console.log(result);
})

function datafetcher(url){
  const promise3 = new Promise(function(resolve , reject)
{
  fetch(url)
  .then(raw => raw.json())
  .then(result =>{
    resolve(result)
  })
  return promise3;
})
}
 
// var parchi = datafetch("https://randomuser.me/api")
// .then(function(result){
// consol.log(result);
// })

//using async and await
async function datafetcher(url){
  let data = await fetch(url)
let result =await data.json() 
return result;
}
async function hh(){
  let data = await datafetcher("https://randomuser.me/api")
  consol.log(data);
}
hh();

//*Genrators:
// generators are used to create iterators in JavaScript. They are functions that can be used to iterate over a sequence of values.
// we can use them to pause the execution of a function and resume it later.
