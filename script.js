const API_KEY = "7f2bf8b5e1d4683d9c2886d60f2b5ef0";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  //we write here metrics for celcius no then it comes v
  const response = await fetch(url);
  const data = await response.json();
  return showData(data);
};

const showData = (data) => {
   if(data.cod == "404"){
    weather.innerHTML = `<h2>City is not found</h2>`
   }
  weather.innerHTML = `
            <div>
                <i class="fa-solid fa-cloud"></i>
            </div>
            <div>
             <h2>${data.main.temp} °C</h2>
             <h4>${data.weather[0].main}</h4>
            </div>
`;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
