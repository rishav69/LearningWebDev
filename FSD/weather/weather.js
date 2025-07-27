async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const display = document.getElementById('weatherDisplay');

    if (!city) {
        display.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = '9b180055dd532e3b572666b1932c6af9';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?` +
        `q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        const name = data.name;
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        display.innerHTML = `
          <h2>${name}</h2>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
          <p><strong>${temp}°C</strong> ${desc}</p>
        `;
    } catch (err) {
        display.innerHTML = `<p>Error: ${err.message}</p>`;
    }
}