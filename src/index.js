import './styles.css'
import logo from './images/logo_sky_log.png'

const key = "SC4BWVDFLWVH4HLHVLDN8GU3C";

// Add Logo
document.addEventListener("DOMContentLoaded", () => {
    const logoNav = document.getElementById("logo");

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