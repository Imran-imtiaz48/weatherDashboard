document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;

    // Simulated weather data
    const weatherData = {
        "New York": {
            name: "New York",
            country: "US",
            temp: 25,
            description: "Sunny",
            humidity: 50,
            windSpeed: 3
        },
        "London": {
            name: "London",
            country: "GB",
            temp: 18,
            description: "Cloudy",
            humidity: 70,
            windSpeed: 5
        },
        "Paris": {
            name: "Paris",
            country: "FR",
            temp: 20,
            description: "Rainy",
            humidity: 80,
            windSpeed: 7
        },
        "Dubai": {
            name: "Dubai",
            country: "AE",
            temp: 40,
            description: "Hot",
            humidity: 20,
            windSpeed: 2
        },
        "Sydney": {
            name: "Sydney",
            country: "AU",
            temp: 22,
            description: "Clear",
            humidity: 60,
            windSpeed: 4
        },
        "Tokyo": {
            name: "Tokyo",
            country: "JP",
            temp: 30,
            description: "Humid",
            humidity: 85,
            windSpeed: 6
        },
        "Mumbai": {
            name: "Mumbai",
            country: "IN",
            temp: 28,
            description: "Monsoon",
            humidity: 90,
            windSpeed: 3
        },
        "Cairo": {
            name: "Cairo",
            country: "EG",
            temp: 35,
            description: "Dry",
            humidity: 25,
            windSpeed: 5
        },
        "Rio de Janeiro": {
            name: "Rio de Janeiro",
            country: "BR",
            temp: 26,
            description: "Mild",
            humidity: 65,
            windSpeed: 3
        },
        "Moscow": {
            name: "Moscow",
            country: "RU",
            temp: 15,
            description: "Cold",
            humidity: 80,
            windSpeed: 4
        },
        // Add more cities as needed...
    };

    const weatherInfo = document.getElementById('weatherInfo');
    
    if (weatherData[city]) {
        const data = weatherData[city];
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.country}</h2>
            <p>Temperature: ${data.temp}°C</p>
            <p>Weather: ${data.description}</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.windSpeed} m/s</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>No data available for ${city}. Please try another city.</p>`;
    }
});
