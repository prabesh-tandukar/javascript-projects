const search_btn = document.querySelector(".search");
const display = document.querySelector(".display");
const error_msg = document.querySelector(".error_msg");

async function getWeather() {
  display.innerHTML = ``;
  error_msg.innerHTML = ``;

  const city = document.getElementById("city");
  const city_name = city.value;
  if (!city_name) return;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=445fa81a7b54438e6cb98530913aa937&units=metric`
  );

  const data = await response.json();
  if (data.cod === "404") {
    error_msg.innerHTML = `City Not Found, Please Try Again`;
    return;
  }
  display.innerHTML = `<div class="city">City :${data.name}</div> <div class="tempt">Temperature: ${data.main.temp} </div> <div class="humidity">Humidity: ${data.main.humidity}</div>  <div class="weather">Weather Condition: ${data.weather[0].description}</div>  <div class="wind">Wind Speed: ${data.wind.speed}</div>`;
}

search_btn.addEventListener("click", getWeather);

//bad practice of api key here
//should add api keys to a .env file and add the .env to gitignore
//access api key via process.env.API_KEY  ( need nodejs)
