// Weather App Script
const apiKey = "2775e0d60ab2d2b554c851ea60309d91";
const temp = document.querySelector(".temperature");
const place = document.querySelector(".location");
const cityInput = document.querySelector(".city_input");
const fetchButton = document.querySelector(".get_weather_btn");

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert("City not found. Please enter a valid city name.");
      return;
    }
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (err) {
    console.log(err);
  }
}

fetchButton.addEventListener("click", () => {
  if (cityInput.value.trim() !== "") {
    const city = cityInput.value;
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

function updateWeatherInfo(data) {
  place.innerText = `${data.name}, ${data.sys.country}`;
  temp.innerText = `${Math.floor(data.main.temp)}°C`;
}
