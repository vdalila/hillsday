// Animação dos balões e da mensagem
anime.timeline({
    loop: true
})
.add({
    targets: '.message .cube',
    scale: [2, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 950,
    delay: (el, i) => 70 * i
})
.add({
    targets: '.message .cube',
    scale: [1, 0],
    opacity: 0,
    duration: 950,
    easing: 'easeInQuad',
    delay: (el, i) => 70 * i
});

// Função para criar balões animados
function createBalloons() {
    const balloonContainer = document.getElementById('balloons');
    const numberOfBalloons = 20;

    for (let i = 0; i < numberOfBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloonContainer.appendChild(balloon);
    }
}

window.onload = () => {
    createBalloons();
};
