import './styles.css'
import logo from './images/logo_sky_log.png'

const key = "SC4BWVDFLWVH4HLHVLDN8GU3C";
const form = document.getElementById("form-search")
const input = document.getElementById("input-search");
const content = document.getElementById("content");

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

function celsius(f) {
    return ((f -32) * 5/9).toFixed(2);
}

function getName(n) {
    let name = '';

    for (let i = 0; i < n.length; i++) {
        if (n[i] === ',') return name;
        name += n[i];
    }
    return name;
}

function getIcon(iconName) {
    const allString = [
        "clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy", "rain", "showers-day", "showers-night",
        "thunder-rain", "thunder-showers-day", "thunder-showers-night", "snow", "snow-showers-day", "snow-showers-night",
        "fog", "wind", "hail"
    ];
    const allEmojis = [
        '☀️', '🌙', '⛅', '☁️', '☁️', '🌧️', '🌦️', '🌧️', '⛈️', '⛈️', '⛈️', '❄️', '🌨️', '🌨️', '🌫️', '💨', '🌨️'
    ];
    for (let i = 0; i < allString.length; i++)
        if (iconName === allString[i]) return allEmojis[i];
    return '☀️';
}

class City {
    constructor(data) {
        this.name = getName(data.resolvedAddress);
        this.date = data.days[0].datetime;
        this.temp = celsius(data.currentConditions.temp);
        this.feel =  celsius(data.currentConditions.feelslike);
        this.conditions = data.currentConditions.conditions;
        this.sunrise = data.currentConditions.sunrise;
        this.sunset = data.currentConditions.sunset;
        this.humidity = data.currentConditions.humidity;
        this.windspeed = data.currentConditions.windspeed;
        this.uvindex = data.currentConditions.uvindex;
        this.icon = data.currentConditions.icon;
        this.description = data.description;
        this.tempmax = celsius(data.days[0].tempmax);
        this.tempmin = celsius(data.days[0].tempmin);

        this.forecast = data.days.slice(1, 6);
    }
    
    display() {
        console.log(`Nom: ${this.name}`);
        console.log(`Température: ${this.temp} ressenti ${this.feel}. ${this.conditions}`)
        console.log(`Sunrise: ${this.sunrise} - Sunset: ${this.sunset}`);
        content.innerHTML = `
            <div class="weather-main">
                <span class="weather-icon">${getIcon(this.icon)}</span>
                <p class="weather-temp">${this.temp}°C</p>
            </div>
            <div class="weather-secondary">
                <h1>${this.name}</h1>
                <p class="weather-date">${new Date(this.date + 'T00:00:00').toLocaleDateString('en-US', options)}</p>
                <p class="wheater-feel">Feels like ${this.feel}°C</p>
                <p class="weather-description">${this.conditions}. ${this.description}</p>
            </div>
            <div class="weather-stats">
                <div class="stat-item stat-sunrise">
                    <span class="stat-icon">🌅</span>
                    <p class="stat-label">Sunrise</p>
                    <p class="stat-value">${this.sunrise}</p>
                </div>
                <div class="stat-item stat-sunset">
                    <span class="stat-icon">🌇</span>
                    <p class="stat-label">Sunset</p>
                    <p class="stat-value">${this.sunset}</p>
                </div>
                <div class="stat-item stat-humidity">
                    <span class="stat-icon">💧</span>
                    <p class="stat-label">Humidity</p>
                    <p class="stat-value">${this.humidity}%</p>
                </div>
                <div class="stat-item stat-windspeed">
                    <span class="stat-icon">💨</span>
                    <p class="stat-label">Windspeed</p>
                    <p class="stat-value">${this.windspeed} km/h</p>
                </div>
                <div class="stat-item stat-uvindex">
                    <span class="stat-icon">☀️</span>
                    <p class="stat-label">UV Index</p>
                    <p class="stat-value">${this.uvindex}</p>
                </div>
                <div class="stat-item stat-tempmax">
                    <span class="stat-icon">🔺</span>
                    <p class="stat-label">Max</p>
                    <p class="stat-value">${this.tempmax}°C</p>
                </div>
                <div class="stat-item stat-tempmin">
                    <span class="stat-icon">🔻</span>
                    <p class="stat-label">Min</p>
                    <p class="stat-value">${this.tempmin}°C</p>
                </div>
            </div>
            <div class="weather-forecast">
                ${this.forecast.map(day => {
                    return `
                        <div class="forecast-item">
                            <p class="forecast-date">${new Date(day.datetime + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })}</p>
                            <span class="forecast-icon">${getIcon(day.icon)}</span>
                            <p class="forecast-temp">Max: ${celsius(day.tempmax)}°C - Min: ${celsius(day.tempmin)}°C</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `
    }
}

// Get datas
async function getData() {
    if (input.value.length === 0) {
        console.log("Enter a city name");
        return;
    }
    try {
        const location = encodeURIComponent(input.value);
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=${key}`);
        const data = await response.json();
        const city = new City(data);
        city.display();
    } catch (error) {
        content.innerHTML = `
            <h1 class="error"><em>${input.value}</em> isn't a city !</h1>
        `;
    }
    input.value = "";
}

input.addEventListener("invalid", () => {
    input.setCustomValidity("Enter the name of city !");
});

input.addEventListener("input", () => {
    input.setCustomValidity("");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData();
});

// Add Logo
document.addEventListener("DOMContentLoaded", () => {
    const logoNav = document.getElementById("img-logo");

    if (logoNav)
        logoNav.src = logo;
    const logoLink = document.createElement("link")
    logoLink.rel = "icon";
    logoLink.type = "image/png";
    logoLink.href = logo;
    document.head.appendChild(logoLink);
});

// Background
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

const stars = Array.from({length:200}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() + 0.5,
    alpha: Math.random(),
    delta: (Math.random() - 0.5) * 0.02,
}));

const shootingStars = [];

function createShootingStar() {
    const side = Math.floor(Math.random() * 4);
    let startX, startY, baseAngle;
    
    if (side === 0) {
        startX = Math.random() * window.innerWidth;
        startY = -50;
        baseAngle = Math.PI / 2;
    } else if (side === 1) {
        startX = window.innerWidth + 50;
        startY = Math.random() * window.innerHeight;
        baseAngle = Math.PI;
    } else if (side === 2) {
        startX = Math.random() * window.innerWidth;
        startY = window.innerHeight + 50;
        baseAngle = -Math.PI / 2;
    } else {
        startX = -50;
        startY = Math.random() * window.innerHeight;
        baseAngle = 0;
    }

    const angleVariation = (Math.random() - 0.5) * 0.5;
    
    const shootStar = {
        x: startX,
        y: startY,
        baseAngle: baseAngle + angleVariation,
        currentAngle: baseAngle + angleVariation,
        length: Math.random() * 150 + 80,
        speed: Math.random() * 3.5 + 4,
        opacity: 1,
        curve: (Math.random() - 0.5) * 0.05,
        path: [] 
    };
    shootingStars.push(shootStar);
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const offsetX = (mouseX - window.innerWidth / 2);
    const offsetY = (mouseY - window.innerHeight / 2);
    
    stars.forEach(star => {
        star.alpha += star.delta;
        if (star.alpha > 1 || star.alpha < 0) star.delta *= -1;
        ctx.beginPath();
        ctx.arc(
            star.x + offsetX * star.radius * 0.2,
            star.y + offsetY * star.radius * 0.2,
            star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });

    if (Math.random() < 0.01) createShootingStar();
    
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const shootStar = shootingStars[i];

        shootStar.path.push({x: shootStar.x, y: shootStar.y});

        const maxPathPoints = Math.ceil(shootStar.length / shootStar.speed) + 5;
        if (shootStar.path.length > maxPathPoints) shootStar.path.shift();
        shootStar.currentAngle += shootStar.curve;
        shootStar.x += shootStar.speed * Math.cos(shootStar.currentAngle);
        shootStar.y += shootStar.speed * Math.sin(shootStar.currentAngle);
        
        shootStar.opacity -= 0.008;

        if (shootStar.opacity <= 0) {
            shootingStars.splice(i, 1);
            continue;
        }

        if (shootStar.path.length > 1) {
            ctx.beginPath();
            ctx.moveTo(shootStar.path[0].x, shootStar.path[0].y);
            for (let j = 1; j < shootStar.path.length; j++) ctx.lineTo(shootStar.path[j].x, shootStar.path[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${shootStar.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }
    }
    
    requestAnimationFrame(drawStars);
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
}

resizeCanvas();
drawStars();

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});