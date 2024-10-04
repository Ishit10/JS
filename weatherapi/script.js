document.getElementById("get-weather").addEventListener("click", function () {
    const city = document.getElementById("city").value;

    // Replace with your OpenWeather API key
    const apiKey = "093b6f1061beea76b15c9ed763024dcd";
    
    if (city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    // Display weather data
                    document.getElementById("weather-result").innerHTML = `
                        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    `;
                } else {
                    document.getElementById("weather-result").innerHTML = `
                        <p style="color: red;">City not found. Please try again.</p>
                    `;
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                document.getElementById("weather-result").innerHTML = `
                    <p style="color: red;">An error occurred while fetching data. Please try again.</p>
                `;
            });
    } else {
        alert("Please enter a city name.");
    }
});
