// Function to change H1 to search value
function changeHeading(event) {
  event.preventDefault();
  let h1 = document.querySelector(".current-city");
  let newH1 = fetchSearchValue();
  newH1 = newH1.trim();
  h1.innerHTML = newH1[0].toUpperCase() + newH1.slice(1).toLowerCase();
}

// Function to return search value to be used in func changeHeading
function fetchSearchValue() {
  let searchButton = document.querySelector(".search-input");
  return searchButton.value;
}

// Add event listener for search button
let weatherButton = document.querySelector("form");
weatherButton.addEventListener("submit", changeHeading);

// Function to return present values formated date and time
function formatDateTime() {
  let dateTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dateTime.getDay()];
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();

  let sentence = "";
  if (minute < 10) {
    sentence = `${day} ${hour}:0${minute}`;
  } else {
    sentence = `${day} ${hour}:${minute}`;
  }
  return sentence;
}

// Function to change inner HTML of date and time values to present values
function changeDateTime() {
  let oldDateTime = document.querySelector("#date-time");
  oldDateTime.innerHTML = formatDateTime();
}

// Call function changeDateTime
changeDateTime();

// AJAX //
/* Jsonplaceholder.typicode.com
Axios library - for http requests, allows us connect to an external website(use unpkg CDN to install)
Add script link to the head of your html file, inside the script tag: */

let apiUrl = "https://json..";

function displayUsername(response) {
  console.log(response.data.username);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `Hey ${response.data.username}`;
}

axios.get(apiUrl).then(displayUsername);

function showUser(response) {
  alert(`The user name is ${response.data.name}`);
}

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);

/* response.data.forEach(user => {
  console.log(user.username);
  });
 */
/* If returns an array 
  ${response.data[0].username};
  */

// AJAX with Fetch //
let root = "https://jsonplaceholder.typicode.com";
let path = "users/1";

fetch(root + "/" + path)
  .then((response) => response.json())
  .then((json) => console.log(json));

// Task //
// Challenge 2, 3
let commentsUrl = "https://jsonplaceholder.typicode.com/comments";

function displayComment(response) {
  console.log(response);
  console.log(response.data[0].email);
}
axios.get(commentsUrl).then(displayComment);

// Challenge 2
let apiKey = "8ee4f5od9c4ae9cb47ffb5f4t03d2531";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=sydney&key=8ee4f5od9c4ae9cb47ffb5f4t03d2531&units=metric";

function showWeather(response) {
  console.log(response.data.temperature);
  let h1 = document.querySelector("h1");
  let city = response.data.city;
  let weather = Math.round(response.data.temperature.current);
  h1.innerHTML = `It is ${weather} degrees in ${city}`;
}

axios.get(apiUrl).then(showWeather);
