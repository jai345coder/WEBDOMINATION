//JAVASCRIPT : BASIC
//==================
// ## 1. **Introduction to JavaScript**  
// - **JavaScript**: A powerful, dynamic language used for web development.
// - **Use**: Adds interactivity (e.g., form validation, animations).

// ### Example:html
// <script>
//   console.log("Hello, World!"); // Outputs Hello, World! to the console
// </script>

// ---

// ## 2. **Variables**  
// - **`var`**: Old way to declare variables.  
// - **`let`**: Block-scoped variable.  
// - **`const`**: Block-scoped, can't be reassigned.

// ### Example:

let name = "John"; // Declare a variable with the value "John"
const age = 30;    // Declare a variable with the value 30 and prevent reassignment
var city = "New York"; // Declare a variable with the value "New York" with the old syntax

// ---

// ## 3. **Data Types**  
// - **Primitive**: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`.
// - **Non-Primitive**: `Object`, `Array`, `Function`.

// ### Example:

let isActive = true; // Boolean
let score = 50;      // Number
let person = { name: "John", age: 30 }; // Object

// ---

// ## 4. **Functions**  
// - **Function Declaration**:  

function greet(name) {
  return `Hello, ${name}!`;
}
// - **Arrow Function**:  

const greet = (name) => `Hello, ${name}!`;

// ---

//higher order function🟢🟢🟢
/* any function which takes a function as an argument/ parameter or returns a function is called higher order function*/ 
function higherOrderFunction(callback) {
  return callback();
}

// ## 5. **Conditionals**  
// - **`if...else`**: Executes based on conditions.
  
// ### Example:

const age2 = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// - **`switch`**: Handles multiple conditions.
  
// ### Example:

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

// ---

// ## 6. **Loops**  
// - **`for`**: Iterates a fixed number of times.  
// - **`while`**: Iterates while a condition is true.  
// - **`forEach`**: Iterates over arrays.

// ### Example:

for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// ---

// ## 7. **Arrays**  
// - **Create**: `let arr = [1, 2, 3];`
// - **Methods**: `push()`, `pop()`, `map()`, `filter()`, `forEach()`.

// ### Example:

let numbers = [1, 2, 3];
numbers.push(4); // Adds 4
console.log(numbers); // [1, 2, 3, 4]

// ---

// ## 8. **Objects**  
// - **Create**: `{ key: value }`
  
// ### Example:

let car = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log("Car started");
  }
};
car.start();



// ## Review Questions 🧠
// 1. What are the differences between `let`, `const`, and `var`?  
// 2. Write a function to calculate the square of a number.  
// 3. How can you iterate through an array in JavaScript?  
// 4. What is the difference between `==` and `===`?  
// 5. Explain the use of `addEventListener` with an example.
   
 
    // # Advanced JavaScript Notes 🚀

    // ---
    
    // ## 1. **ES6 Features**  
    // - **Template Literals**: Easier string interpolation.  
    //   
      let name2 = "John";
      console.log(`Hello, ${name}!`); // Hello, John!
     
    
    // - **Destructuring**: Unpack values from arrays/objects.  
    //   
      let [a, b] = [1, 2];
      let { x, y } = { x: 10, y: 20 };
    
    
    // - **Spread Operator**: Expands arrays/objects.  
    //  
      let arr1 = [1, 2];
      let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
     
    
    // ---
    
    // ## 2. **Promises & Async/Await**  
    // - **Promise**: Asynchronous operations.  
    //  
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done"), 1000);
      });
      promise.then((result) => console.log(result)); // Done
    
    
    // - **Async/Await**: Simplify promises.  
    //  
      async function fetchData() {
        let data = await fetch("https://api.example.com");
        console.log(await data.json());
      }
      fetchData();
    
    
    // ---
    
    // ## 3. **Modules**  
    // - **Export** and **Import** to organize code.  
    //   
      // fil
      export const greet = () => console.log("Hello!");
      
      // fil
      import { greet } from './fil';
      greet();
    
    
    // ---
    
    // ## 4. **Closures**  
    // - **Definition**: Functions with access to their outer scope.  
    //  
      function outer() {
        let count = 0;
        return function inner() {
          count++;
          console.log(count);
        };
      }
      const counter = outer();
      counter(); // 1
      counter(); // 2
    
    
    // ---
    
    // ## 5. **Event Loop & Asynchronous Behavior**  
    // - **Call Stack / **: Handles synchronous tasks.  
    // - **Task Queue**: Processes `setTimeout`, `fetch`, etc.  
    // - **Microtask Queue**: Processes `Promise` callbacks first.
    //event loop: a sequence of tasks that are executed in a specific order, ensuring that synchronous tasks are executed first, followed by tasks in the task queue, and finally tasks in the microtask queue.
    // ---
    
    // ## 6. **Prototypes and Inheritance**  
    // - **Prototype Chain**: Enables inheritance.  
    //   
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function () {
        console.log(`Hello, ${this.name}`);
      };
      
      const john = new Person("John");
      john.greet(); // Hello, John
     
    
    // ---
    
    // ## 7. **Classes**  
    // - **Class Declaration**: Blueprint for objects.  
    
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          console.log(`${this.name} makes a sound.`);
        }
      }
      
      class Dog extends Animal {
        speak() {
          console.log(`${this.name} barks.`);
        }
      }
      
      const dog = new Dog("Rex");
      dog.speak(); // Rex barks.
   
    
    // ---
    
    //* ## 8. **Error Handling**  
    // - **`try...catch`**: Handles runtime errors.  
    //  it handles the error cases for any function which you wants should not be taken 💻💻❎❎
      try {
        let result = riskyFunction();
      } catch (error) {
        console.error("Error occurred:", error.message);
      } finally {
        console.log("Execution completed.");
      }
     
    
    // ---
    
    // ## 9. **JavaScript Design Patterns**  
    // - **Module Pattern**: Encapsulate code.  
    
      const Module = (function () {
        let privateVar = "I am private";
        return {
          publicMethod: () => console.log(privateVar),
        };
      })();
      Module.publicMethod(); // I am private
    
    // - **Singleton Pattern**: Ensures only one instance.  
    // 
      const Singleton = (function () {
        let instance;
        function createInstance() {
          return { data: "This is a Singleton" };
        }
        return {
          getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
          },
        };
      })();
    
    
    // ---
    //EVENTS:
    // ## 10. **Event Listeners**  
    // - **Event Bubbling**: Propagate events from child to parent.
    //  
      const container = document.getElementById("container");
      const button = document.getElementById("button");
      button.addEventListener("click", () => console.log("Button clicked"));
      container.addEventListener("click", () => console.log("Container clicked"));
      document.addEventListener("click", () => console.log("Document clicked"));
      document.body.addEventListener("click", () => console.log("Body clicked"));
      document.documentElement.addEventListener("click", () => console.log("HTML clicked"));
      window.addEventListener("click", () => console.log("Window clicked"));
      // Output:
      // Button clicked
      // Container clicked
    
    // ## Review Questions 🧠  
    // 1. What are **promises**? How do they work with `.then` and `.catch`?  
    // 2. Explain **closures** with an example.  
    // 3. What is the difference between **Class** and **Prototype** inheritance?  
    // 4. How does the **Event Loop** handle asynchronous tasks?  
    // 5. Demonstrate how **modules** work in JavaScript.  
    // 6. What is the **spread operator**, and where can it be used?


    //*ASYNCONSUSC JS:
   // ## 11. **Async/Await**  
    // - **Async**: Executes tasks asynchronously.  
    // - **Await**: Waits for a promise to resolve.  
    //
    //*diff between async and sync:
    // - **Async**: Executes tasks asynchronously.meaning it will not wait for the task to complete before moving on to the next line of code.  
    // - **Sync**: Executes tasks synchronously, meaning it will wait for the task to complete before moving on to the next line of code.   

    var result  = fetch();//Aysnc cod  which will run after the main code
    console.log(result);//sync code 
    //OUTPUT: undefind❌❌❌

    // CORRECT FORM:  .
    // This function is declared as **async**. This means that this function will return a **Promise**.
    // The **await** keyword is used to pause the execution of this function until the **Promise** returned by **fetch()** is resolved or rejected.
    // Once the **Promise** is resolved, the value of the **Promise** is stored in the **result** variable.
    // The **console.log(result)** statement is then executed, which logs the value of the **result** variable to the console.
    async function ABCD() {
      // The **await** keyword is used to pause the execution of this function until the **Promise** returned by **fetch()** is resolved or rejected.
      const result = await fetch();
      // Once the **Promise** is resolved, the value of the **Promise** is stored in the **result** variable.
      // The **console.log(result)** statement is then executed, which logs the value of the **result** variable to the console.
      console.log(result);
    }



    //setTimeout:
    // ## 12. **setTimeout**  
    // - **Definition**: Executes a function after a specified delay.  
    //  
      setTimeout(() => console.log("After 2 seconds"), 2000);
    
    //setInterval:
    // ## 13. **setInterval**  
    // - **Definition**: Executes a function at regular intervals.  
    //  
      setInterval(() => console.log("Every 2 seconds"), 2000);
    
    //clearTimeout:
    // ## 14. **clearTimeout**  
    // - **Definition**: Clears a timeout set with `setTimeout`.  
    //  
      const timeoutId = setTimeout(() => console.log("After 2 seconds"), 2000);
      clearTimeout(timeoutId);
    
    //clearInterval:
    // ## 15. **clearInterval**  
    // - **Definition**: Clears an interval set with `setInterval`.  
    //  
      const intervalId = setInterval(() => console.log("Every 2 seconds"), 2000);
      clearInterval(intervalId);
    
    // ---fetch api:
    // ## 16. **Fetch API**  
    // - **Definition**: Fetches data from a server.  
    //  
      fetch("https://api.example.com/data")//copy the url
        .then((response) => response.json())//the api data is not in human readable format ----> convert to human readable by json...
        .then((data) => console.log(data))//data is fetch 
        .catch((error) => console.error(error));
    
    // ---JSON:1
    // ## 17. **JSON**  
    // - **Definition**: JavaScript Object Notation.  
    //  
      const jsonData = { name: "John", age: 30, city: "New York" };
      const jsonString = JSON.stringify(jsonData); // Convert to JSON string
      const jsonObject = JSON.parse(jsonString); // Convert back to JavaScript object
    
    // ---promises:
    // ## 18. **Promises**  
    // - **Definition**: A way to handle asynchronous operations.  
    
    //  
      const promise2 = new Promise((resolve, reject) => {
        // Perform asynchronous operation
        // If successful, resolve the promise with the result data
        // If an error occurs, reject the promise with an error message
      });

      //Axions:
      // ## 19. **Axios**  
      // - **Definition**: Simplifies making HTTP requests.  
      //Axios is a popular library for making HTTP requests in JavaScript.it is a promise based library  
     //*APPLY TO YOUR HTML CODE:⚠️⚠️⚠️ <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      axios
        .get("https://api.example.com/data")//
        .then((response) => console.log(response.data))//here we dont get raw data we get the human readable DATA ..
        .catch((error) => console.error(error));


//callbacks:
// ## 20. **Callbacks**  
// - **Definition**: A function passed as an argument to another function.


//doSomethingAsyncTask function ko humne banaya hai jisme hum url ko as an argument pass kar rahe hai aur callback function ko bhi as an argument pass kar rahe hai
//callback function humne define kiya hai ki jab doSomethingAsyncTask function complete ho jayega tab usko call karega
//callback function me humne console.log kiya hai ki "callback function called" aise hum yeh pata kar sakte hai ki callback function kab call hua
function doSomethingAsyncTask(url,callback){
  fetch(url)
  .then( raw => raw.json())
  .then(result => {
callback();
  })
}

doSomethingAsyncTask("https://api.example.com/data",() => {
  console.log("callback function called");
})


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