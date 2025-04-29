document.addEventListener("DOMContentLoaded", () => {
  let cityInput = document.getElementById("city-input");
  let getWeatherBtn = document.getElementById("get-weather-btn");
  let weatherInfo = document.getElementById("weather-info");
  let errorMessage = document.getElementById("error-message");
  let cityNameDisplay = document.getElementById("city-name");
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");

  const API_KEY = <>Your Api Key</>;

  document.getElementById("weatherbyLoc").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    });
    weatherInfo.classList.add("hidden");
    document.getElementById("weatherData").classList.remove("hidden");
  });

  function getWeather(lat, lon) {
    const API_KEY = "ac60d0457ecf5529efb7a3134ab7c727";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("weatherData").innerHTML = `<center>
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p></center>
      `;
      })
      .catch((err) => console.error(err));
  }

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    document.getElementById("weatherData").classList.add("hidden");
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json(); // .json -> is used to convert response into string for browser.
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.innerHTML = name;
    temperature.innerHTML = `,Temperature : ${main.temp}`;
    description.innerHTML = `Weather : ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  document.getElementById("removeInput").addEventListener("click", () => {
    if (cityInput.value != "") {
      cityInput.value = "";
    }
  });
});
