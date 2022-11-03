//Feature #1 In your project, display the current date and time using JavaScript: Tuesday 16:00

let date = new Date();
let hours = date.getHours();
let minut = date.getMinutes();
let day = date.getDay();
let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";

let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let toDay = weekDay[day];

let actualDate = document.querySelector("#date");
actualDate.innerHTML = `${toDay}  ${hours}:${minut}`;

/* 🕵️‍♀️Feature #2
Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.  */
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", cityName);

//let currentCity = document.querySelector("#current-city");
//searchForm.addEventListener("submit", currentCitySearc);

let cityInpu = document.querySelector("#city-input");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

function cityName(event) {
  event.preventDefault();

  city.innerHTML = cityInpu.value;
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInpu.value}&units=metric&appid=${apiKey}`;

  //found temperature
  function newTemperature(event) {
    console.log(event.data.main.temp);
    temperature.innerHTML = Math.round(event.data.main.temp);
    humidity.innerHTML = `Humidity: ${Math.round(event.data.main.humidity)}%`;
    wind.innerHTML = `Wind: ${Math.round(event.data.wind.speed)} km/h`;
  }
  console.log(axios.get(apiCall));

  console.log(axios.get(apiCall).then(newTemperature));
}

/* function currentCitySearc(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(showPosition);
} */
