// Addition
// Create a calculator that only does addition.

// The calculator should have two number inputs and a button that says "Add".
// When the user clicks the "Add" button, the sum of the two numbers they entered into the inputs should be printed to the DOM below the calculator and the inputs should be cleared. You may need to convert strings to numbers to make this work.
// You can stop here and go back and work on exercises if you want. Or you can continue with the following challenges:
// Subtraction
// Add a button that says "Subtract". When the user clicks the subtract button, the difference between the two numbers they entered should be printed to the DOM below the calculator.

// Division and Multiplication.
// Add two more buttons to your calculator-- one that multiplies the two numbers and prints the result to the DOM, and one that divides the two numbers and prints the result to the DOM.

const save = document.querySelector("#output");
// console.log (save)

document.querySelector("#add").addEventListener("click", function () {
  console.log("you clicked add")
    let num1 = document.querySelector("#number1").value;
  let num2 = document.querySelector("#number2").value;
  sum = parseInt(num1) + parseInt(num2)
  save.innerHTML =`
  <p id="sum">${sum}</p>
  `;
  document.querySelector("#number1").value = "";
  document.querySelector("#number2").value = "";
});


document.querySelector("#multiply").addEventListener("click", function () {
    console.log("you clicked multiply")
    const num1 = document.querySelector("#number1").value;
  const num2 = document.querySelector("#number2").value;
  multiply = parseInt(num1) * parseInt(num2)
  save.innerHTML =`
  <p id="sum">${multiply}</p>
  `;
  document.querySelector("#number1").value = "";
  document.querySelector("#number2").value = "";
})

document.querySelector("#subtract").addEventListener("click", function () {
    console.log("you clicked subtract")
    const num1 = document.querySelector("#number1").value;
    const num2 = document.querySelector("#number2").value;
    subtract = parseInt(num1) - parseInt(num2)
    save.innerHTML =`
    <p id="sum">${subtract}</p>
    `;
    document.querySelector("#number1").value = "";
    document.querySelector("#number2").value = "";
  });

  document.querySelector("#divide").addEventListener("click", function () {
    console.log("you clicked divide")
    const num1 = document.querySelector("#number1").value;
    const num2 = document.querySelector("#number2").value;
    divide = parseInt(num1) / parseInt(num2)
    save.innerHTML =`
    <p id="sum">${divide}</p>
    `;
    document.querySelector("#number1").value = "";
    document.querySelector("#number2").value = "";
  });

// want to refactor the code

// const button = document.querySelectorAll("mathButton").value
// console.log (button, "click")
 

// for (var i = 0; i < button.length; i++){
//     button[i].addEventListener("click", function(){

//     })
// }