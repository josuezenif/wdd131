//get current year code (2026)
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

// last modified code
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

const temperature = 8;
const windSpeed = 37;

function calculateWindChill(temp, windspeed) {
    return 13.12 + (0.6215 * temp) - 11.37 * (windspeed ** 0.16) + (0.3965 * temp) * (windspeed ** 0.16);
}

const windChill = document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
