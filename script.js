const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5afffd5e01mshc6e701700c74c27p13b612jsn188d1c3bbe26",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
	cityName.innerHTML = city[0].toUpperCase() + city.slice(1);
	
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString();    
    sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString();
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})


getWeather("Delhi")

function menuToggle(){
  const toggle=document.querySelector('.togglemenu');
  const links=document.querySelector('.links');
  toggle.classList.toggle('active');
  links.classList.toggle('active');
}




