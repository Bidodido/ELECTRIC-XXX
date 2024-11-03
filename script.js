☐ let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let level = localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 1;

const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const clickButton = document.getElementById('clickButton');

function updateDisplay() {
    scoreDisplay.textContent = score;
    levelDisplay.textContent = level;
}

clickButton.addEventListener('click', () => {
    score++;
    
    if (score >= level * 1000) {
        level++;
    }

    updateDisplay();
    localStorage.setItem('score', score);
    localStorage.setItem('level', level);
    createFallingHearts();
});

function createFallingHearts() {
    const heart = document.createElement('span');
    heart.textContent = '♥️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '24px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '0px';
    document.body.appendChild(heart);

    let fallInterval = setInterval(() => {
        let currentTop = parseFloat(heart.style.top);
        if (currentTop < window.innerHeight) {
            heart.style.top = currentTop + 5 + 'px';
        } else {
            clearInterval(fallInterval);
            document.body.removeChild(heart);
        }
    }, 50);
}

updateDisplay();
