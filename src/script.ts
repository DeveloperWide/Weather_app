const input = document.querySelector(".city_input") as HTMLInputElement;
const search = document.querySelector(".get_weather_btn") as HTMLButtonElement;
const locati = document.querySelector(".location") as HTMLElement;
const temperature  = document.querySelector(".temperature") as HTMLElement;


interface WeatherAPI {
    name: string;
    sys: {country: string};
    main: {temp: number};
}

async function fetchWeatherInfo(city: string) : Promise<void> {
    const apiKey = "838e2265648351e83feaa3fc33449922";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`

    try{
        const res = await fetch(url);
        if(!res.ok){
           return alert("Please Enter a valid city name.");
        }
        const data: WeatherAPI = await res.json();
        showWeatherInfo(data);
    }catch(err){
        console.log(err);
    }
}

search.addEventListener('click', () => {
    if(input.value.trim() !== ""){
        fetchWeatherInfo(input.value);
    }else{
        alert("Please Enter a City Name!");
    }
})


function showWeatherInfo(data: WeatherAPI): void{
    temperature.innerText = `${Math.floor(data.main.temp)}°C`;
    locati.innerText = `${data.name}, ${data.sys.country}`;
}