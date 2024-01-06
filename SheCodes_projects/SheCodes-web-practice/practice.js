// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios

function isWindy(speed) {
  if (speed > 5) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
}

isWindy(15);
let speedInput = prompt("What is the current wind speed?");
isWindy(speedInput);

let users = ["John", "Joshua", "Joseph"];
console.log(users);
console.table(users);

// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

// function isWindy(speed) {
//   if (speed > 5) {
//     return true;
//     //alert("It is windy");
//   } else {
//     return false;
//     //alert("It is not windy");
//   }
// }

let userInput = prompt("What is the wind speed?");
let unitMetric = prompt("Please indicate if metric or imperial unit");

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

function isWindy(speed, unit) {
  if (speed > 5 && unit == "metric") {
    return true;
    //alert("It is windy");
  } else {
    return false;
    //alert("It is not windy");
  }
}

if (isWindy(userInput, unitMetric)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}

//JS DATE
let now = new Date();

console.log(now.getMonth()); //0 - 11
console.log(now.getYear());
console.log(now.getFullYear());
console.log(now.getMilliseconds());
console.log(now.getSeconds());
console.log(now.getMinutes());
console.log(now.getDay()); // 0 - 6
console.log(now.getDate());
console.log(now.getHours());

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

//Challenge 1
let now = new Date();
console.log(now.getDate());

//Challenge 2
console.log(now.getMilliseconds());

//Challenge 3
console.log(now.getDay());

//Challenge 4
console.log(now.getFullYear());

//Challenge 5
console.log(now.getMonth());

//Challenge 6
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let current_date = now.getDate();
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
console.log(`Today is ${day}, ${month} ${current_date}, ${year}`);

//Challenge 7
function formatDate(date) {
  date = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let current_date = date.getDate();
  let year = date.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  //console.log(`Today is ${day}, ${month} ${current_date}, ${year}`);
  return `${day}, ${month} ${current_date}, ${year}`;
}

console.log(formatDate(new Date()));

// Challenge 1
// Log li with id special
let specialIdCountry = document.querySelector("li#special");
console.log(specialIdCountry);

// Challenge 2
// Log all li with class of country
let specialClassCountry = document.querySelectorAll("li.country");
console.log(specialClassCountry);

// Challenge 3
// Add class special to the li with id special
let addClassToSpecial = document.querySelector("li#special");
addClassToSpecial.classList.add("special");
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
let contentElement = document.querySelector("#special");
contentElement.innerHTML = "Nigeria";

function stopClick(event) {
  console.log(event.target);
  event.preventDefault();
  //event.target.innerHTML = "Following"
  alert("Hello");
}

let heading = document.querySelector("h1");
heading.addEventListener("click", stopClick);

// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
let buttonSelector = document.querySelector("button");

function alertTemp(event) {
  alert("It is 18 degrees");
  event.target.innerHTML = "18 degrees";
}

// function replaceLable(event) {
//   event.target.innerHTML = "18 degrees";
// }
buttonSelector.addEventListener("click", alertTemp);
// buttonSelector.addEventListener("click", replaceLable);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

// JAVASCRIPT FORMS //
//HTML FORM
<form action="/submit">
  <label for="name">Enter your name: </label>
  <input type="text" name="name" id="name" required />
  <label for="email">Enter your email: </label>
  <input type="email" name="email" id="email" required />
  <input type="submit" value="Subscribe!" />
</form>;

{
  /* <form>
  <input type="text" id="email" />
</form>
<script>

function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);
</script> */
}

// Challenge 1
function sayHello() {
  alert("Hooray!");
}
let buttonHandler = document.querySelector("#special-button");
buttonHandler.addEventListener("click", sayHello);

//Challenge 2

function alertPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(passwordInput.value);
}
let submitButton = document.querySelector("#password-form");
submitButton.addEventListener("submit", alertPassword);

// Challenge 3
function userNameEmail(event) {
  event.preventDefault();
  let userEmail = document.querySelector("#email-input");
  let userName = document.querySelector("#username-input");
  alert(`Your user email is ${userEmail.value}`);
  alert(`Your user name is ${userName.value}`);
}

let submitForm = document.querySelector("#signup-form");
submitForm.addEventListener("submit", userNameEmail);
