 // Intersection Observer
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.style.transitionDelay = `${[...elements].indexOf(entry.target) * 0.2}s`;
        } else {
          entry.target.classList.remove("show");
          entry.target.style.transitionDelay = "0s";
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));

    // Música
    const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    // Define o tempo inicial para 10 segundos
    bgMusic.currentTime = 10; 
    bgMusic.play();
    musicBtn.textContent = "⏸️ Pausar Música";
    playing = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎶 Tocar Música";
    playing = false;
  }
});

    // Corações
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 800);

    // Confetes
    const finalBtn = document.getElementById("final-btn");
    finalBtn.addEventListener("click", () => {
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.textContent = ["💖","❤️","💕","💘","💓"][Math.floor(Math.random()*5)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }
    });

    function verificarSenha() {
  const senhaCorreta = "21062025";
  const senhaDigitada = document.getElementById("senha-input").value;

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("senha-overlay").style.display = "none";
  } else {
    document.getElementById("erro").textContent = "Senha incorreta!";
  }
}

