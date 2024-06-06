document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = '77f49cd9cb3847ffcec197a27047601d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('weather-description').innerText = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
                document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
                
                // Show the weather display container
                document.getElementById('weather-display').style.display = 'block';
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data. Please try again.');
        });
}
