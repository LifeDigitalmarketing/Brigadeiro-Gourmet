document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para âncoras
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animação de fade-in nas seções ao rolar a página
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Temporizador de urgência (Contagem regressiva)
    function startCountdown(durationInMinutes, display) {
        let timer = durationInMinutes * 60;
        setInterval(function () {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (--timer < 0) {
                timer = durationInMinutes * 60;
            }
        }, 1000);
    }
    const countdownElement = document.querySelector("#countdown");
    if (countdownElement) {
        startCountdown(10, countdownElement); // Contagem regressiva de 10 minutos
    }

    // Bloquear botão de compra até o fim do vídeo
    const video = document.querySelector("#promo-video");
    const buyButton = document.querySelector(".buy-button");
    if (video && buyButton) {
        buyButton.style.display = "none";
        video.addEventListener("ended", function () {
            buyButton.style.display = "block";
        });
    }
});
