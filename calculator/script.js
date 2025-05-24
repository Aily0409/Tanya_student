let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplyButton = document.querySelector("#times");
let divideButton = document.querySelector("#divide");

let resultDiv = document.querySelector("#result")

function addition(x, y){
  console.log(x + y);
  return x + y;
}

plusButton.addEventListener("click",function(){
  //console.log(num1.value)
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value)
  resultDiv.textContent = addition(num1, num2);
})

function substract(x, y){
  console.log(x-y);
  return x - y;
}

minusButton.addEventListener("click",function(){
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value)
  resultDiv.textContent = substract(num1, num2);
})

function multiply(x, y){
  console.log(x * y);
  return x*y;
}

multiplyButton.addEventListener("click",function(){
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value)
  resultDiv.textContent = multiply(num1, num2);
})

function divide(x, y){
  console.log(x/y);
  return x/y;
}

divideButton.addEventListener("click", function(){
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value)
  resultDiv.textContent = divide(num1, num2);
})