const dvd = document.getElementById("dvd");

let x = Math.random() * (window.innerWidth - dvd.offsetWidth);
let y = Math.random() * (window.innerHeight - dvd.offsetHeight);

let speedX = 2.5;
let speedY = 2.5;

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function animate() {
  x += speedX;
  y += speedY;

  // Borda direita
  if (x + dvd.offsetWidth >= window.innerWidth) {
    x = window.innerWidth - dvd.offsetWidth;
    speedX *= -1;
    dvd.style.color = randomColor();
  }

  // Borda esquerda
  if (x <= 0) {
    x = 0;
    speedX *= -1;
    dvd.style.color = randomColor();
  }

  // Borda inferior
  if (y + dvd.offsetHeight >= window.innerHeight) {
    y = window.innerHeight - dvd.offsetHeight;
    speedY *= -1;
    dvd.style.color = randomColor();
  }

  // Borda superior
  if (y <= 0) {
    y = 0;
    speedY *= -1;
    dvd.style.color = randomColor();
  }

  dvd.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

// Ajusta posição ao redimensionar a janela
window.addEventListener("resize", () => {
  x = Math.min(x, window.innerWidth - dvd.offsetWidth);
  y = Math.min(y, window.innerHeight - dvd.offsetHeight);
});

animate();
