
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const WeatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '0d3190d4f4fd5b3e7d3f44e228596206';
    const city = document.querySelector('.search-box input').value;

    if(city === '')
        return; 

/*
let weather = {
    'apiKey': '0d3190d4f4fd5b3e7d3f44e228596206',
    fetchWeather: function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=China&units=metric&appid=0d3190d4f4fd5b3e7d3f44e228596206').then((response) => response.json()).then(
            data => console.log(data));
     },
    };
*/
   
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then((response) => response.json()).then
        (json => {


            if(json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                WeatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                
                case 'Fog':
                    image.src = 'images/fog.png';
                    break;

                default:
                image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            WeatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            WeatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });

});
