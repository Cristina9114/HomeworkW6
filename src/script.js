let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date},  ${hours}:${minutes}, ${year}`;

function showWeather(response) {
  //console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "9c9368fb528ae05945ea5408791371db";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "9c9368fb528ae05945ea5408791371db";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("submit", getCurrentLocation);

searchCity("Lima");

//function showTemperature(response) {
//console.log(response.data);

//let temperature2 = Math.round(response.data.main.temp);
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = `${temperature2}°C`;
//}

//axios.get(`${apiUrl2}&appid=${apiKey}`).then(showTemperature);

//function displayUsername(response) {
//  console.log(response.data);
//}

//let apiUrl = "https://jsonplaceholder.typicode.com/users/1";

//axios.get(apiUrl).then(displayUsername);

//function search(event) {
//event.preventDefault();
//let cityElement = document.querySelector("#city");
//let cityInput = document.querySelector("#city-input");
//cityElement.innerHTML = cityInput.value;
//make an API call to OpenWeather API
//Once I get the HTTP response, we display the city name and the temperature
//}

//function convertTofaLink(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//let temperature = temperatureElement.innerHTML;
//temperature = Number(temperature);
//temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
//}

//let faLink = document.querySelector("#faLink");
//faLink.addEventListener("click", convertTofaLink);

//function convertToceLink(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//let temperature = temperatureElement.innerHTML;
//temperature = Number(temperature);
//temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
//}
//let ceLink = document.querySelector("#ceLink");
//ceLink.addEventListener("click", convertToceLink);

//let weather = {
//paris: {
//temp: 19.7,
//humidity: 80,
//},
//tokyo: {
//temp: 17.3,
//humidity: 50,
//},
//lisbon: {
//temp: 30.2,
//humidity: 20,
//},
//"san francisco": {
//temp: 20.9,
//humidity: 100,
//},
//oslo: {
//temp: -5,
//humidity: 20,
//},
//};

//let city = prompt("Enter a city?");
//city = city.toLowerCase();
//if (weather[city] !== undefined) {
//let temperature = weather[city].temp;
//let humidity = weather[city].humidity;
//let cTemperature = Math.round(temperature);
//let fTemperature = Math.round((temperature * 9) / 5 + 32);

//alert(
//  `It is currently ${cTemperature}°C (${fTemperature}°F) in ${city} with a humidity of ${humidity}%`
//);
//} else {
//alert(
//    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//);
//}
