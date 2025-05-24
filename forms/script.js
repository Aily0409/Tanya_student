let submit = document.querySelector("input[type=submit]");
let fname = document.querySelector("input[name=fname]");
let lname = document.querySelector("input[name=lname");
let email = document.querySelector("input[name=email]")
let bday = document.querySelector("input[name=bday]");
let age = document.querySelector("input[name=age]");
let country = document.querySelector("select[name=country]");
let gender = document.querySelector("input[name=gender]");
let favcolor = document.querySelector("input[name=favcolor]");
let password = document.querySelector("input[name=password]");

submit.addEventListener("click", printInfo);

function printInfo(){
  console.log(fname.value+" "+lname.value);
  console.log(email.value);
  console.log(bday.value+" "+age.value);
  console.log(country.value);
  console.log(gender.value);
  console.log(favcolor.value);
};
