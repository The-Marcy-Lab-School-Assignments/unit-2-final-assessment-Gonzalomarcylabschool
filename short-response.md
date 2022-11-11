# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide code snippets to illustrate hoisting for both.** 

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

The reason this happens because JavaScript runs in 2 phases: creation (compile) phase and the execution phase. During the creation phase the code will be compiled and store all of the functions and variable declared with the var keyword in memory to be able to access them in the code. This way during the execution phase It knows exactly where to refrence them.

Any Declaration functions can be hiosted. This will allow them to be recognised anyhwhere in the scope of the entire code.  

```js
  //function scope example
  myfunction(); //here the function will run due to hoisting. It is still at the the top of its scope. this will run
  //myNestedFunction() this will not work because it is outside of it's scope.
  function myfunction(){
  	myNestedFunction();//This function is being hoisted inside of its scope it will and can run.
    var x = 1;
    console.log(x);//
    function myNestedFunction(){
      console.log(x);//
    }
  }
  ```

**Note**: arrow and expressions functions can't be hosited.

Any variables declared with `var` would be hoisted as well, meaning the variable is defined through out its scope.This however, does not mean that it will carry its assigment when it is hoisted. The value of the assigment will only be avaiable after its assigment. It can then later in the code be reassigned.

```js
 //hoisting and global scope example
   console.log(x); // will return undefinded. The program recognizes that this variables exists. 
    var x = 5;
    console.log(x); // will print 5.
    x = 4; //the variable has been reassigned and will  print 4.
  ```

2. **Why does the following block of code throw an error?**
  ```javascript
  const isMaya = true;

  if (isMaya) {
    let currentStatus = 'Everything is just fine';
  } else {
    let currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
  ```
Due to the scope of variables declared with the let keyword, `currentStatus` can only be accessed inside of the block or the `{}`, that it's in. Because `console.log(currentStatus);` is outside of the scope of the variable it will return a reffrenceError.

3. **Why does the following block of code NOT throw an error?**
  ```javascript
  const isLaishaOnTime = true;

  if (isLaishaOnTime) {
    var currentStatus = 'Everything is just fine';
  } else {
    var currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
  ```

Unlike the the `let` keyword, `var` is hiosted and has function scope. This allows the variable `currentStatus` to be accessable by the `console.log` can access the value stored.

4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

Before ES6, `var` was the only keyword avaible to declare variables in JavaScript. Any variables declared with `var` would be hoisted, meaning the variable is defined through out its scope. This happens because of the two phases JavaScript runs in.: creation (compile) phase and the execution phase. During the creation phase the code will be compiled and variable declared with the `var` keyword in memory to be able to access them in the code. This way during the execution phase It knows exactly where to refrence them. 

This however, does not mean that it will carry its assigment when it is hoisted. The value of the assigment will only be avaiable after its assigment. It can then later in the code be reassigned.

`var` is also effected by function scope. If you declare a variable with the keyword `var` in a function it will be avaiable for the entirety of the function. 
  
The problem with the `var` keyword is that it can be redeclared at anypoint. If you redeclare in a block, it will also be redeclared out side of the block.
  
Unlike `var`, `let` and `const` cannot be redeclared nor hoisted. This is thanks to the effect of block scope. When a `let` or `const` variable are declare inside of `{ }`(curly braces) better know as a block, they can only be accessed from inside of the the block. One of the added benifits of let is that it can still be reassigned just like the `var` keyword.

 `const` is effected by block scope just like the `let` keyword. The main diffrences between `const` and `let` its abilty to be reassigned.  
 
5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```

This code will output `Kevin Durant` to the console. This happens because objects are passed by reffrence. When we stored `bestPlayer` into `theGOAT` what was stored was the refrence of where in memory `bestPlayer` is stored, not the values of the object. When any cnages is made to `bestPlayer` it will be referenced by `theGOAT`.

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```

The value of `b` will be 10. Where as objects in Javascript are passed by reffrence, primitive data types are passed by value, meaning that the values are copied and stored in their own space in memory from the orriginal variable. Any changes maded to `a` will not effect any variable that it's copied to. 

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
On the line with ` bffs = 'Enmanuel Laisha Cielo';` will be where you get an error. The reason being that variables with the `const` keyword cannot be reassigned. When you tried to reassign `bffs` it will trigger a typeError because it cannot be reassigned. 

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
Because when we store an array into a  

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  
  function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  ```


10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
    console.log(`The best designer in the room is ${theCreator}.`);
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}.`);
  ```
When we declare `theCreator` at the beginning we are setting a global variable that has a global scope. This means that the variable is accessible to everything in the code. When `theCreator` is reassigned inside of the function it will have a global scope after it is invoked. Because JS uses lexical scope and we reassigned the same variable name it will use the global scope of the first declaration. 
When we invoke the function it will log `The best designer in the room is peter.` first.  When we log the string interpolation with `theCreator`, it will have the value of "peter" because when the function was invoked it se the value to "peter". This is again because of the global scope this variable and lexical scope. 

11. **What does the following code log? Why?**
  ```javascript
  let theHustler = 'Laisha';

  function shoutOut() {
    let theHustler = `Paul`;
    console.log(`${theHustler} is the hardest working person in the room.`);
  }

  shoutOut();
  console.log(`${theHustler} is also the hardest working person in the room.`);
  ```
The code will log the following:
```
Paul is the hardest working person in the room.
Laisha is also the hardest working person in the room.
```
When we declare `theHustler` at the beginning we are setting a global variable that has a global scope. This means that the variable is accessible to everything in the code. When `theHustler` is declared inside of the function it will have a block scope. Because JS uses lexical scope and we redeclare the same variable name it will not use the global scope of the first declaration. 
When we invoke the function it will log `Paul is the hardest working person in the room.` first.  When we log the string interpolation with `theHustler` will have the value of "Laisha". This is again because of the global scope this variable has. 


12. **What do we mean when we say that JavaScript passes variables _by value_?**

Primitive data types are passed by value, meaning that the values are store in a single space in moemory. When they are copied to a new variables, they are copied from their location in memory and stored in their own space in memory from the original variable to the new variable. When we change the value to the orginal variable, it will not change the value in the variable where we copied its original value.
```js
  let x = 1; //this will be stored in location "a" in memory.
  let y = x; //this will copy the value stored in location "a" and store it in the new location "b"
  x = 2// this will change the value in location "a" leaving the value in location "b" unchanged.
```

13. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript? Use a code snippet to demonstrate.**

The when we create an object it will create a refrence to point to where the memory lives in memory.

```js
  const obj = { key: "value" }; // this has created a reference to location "a" in memory.
```
If we try to copy `obj` into another variable it will only copy the reference to location "a" and not the properties in the `obj`. 

```js
  const obj2 = obj// this has only stored the reference to location 
  "a"
```
All change to the orginal object will be reflected when we use the variable we stored the reference of the first one. If we use the second variable to make change it will make changes to the object that was originally declared. This is happening because its referencing location "a" in memory.

```js
console.log(obj)// => { key: "value" }
console.log(obj2) // => { key: "value" }
obj.key = "values2";
console.log(obj2)// => { key: "values2" }
obj2.key = "this is the new value."
console.log(obj)// => { key: "this is the new value" }