// Function to generate dynamic floating background hearts
function createHearts() {
    const container = document.getElementById('heartsBg');
    const heartArray = ['❤️', '💖', '💕', '💗', '💓'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartArray[Math.floor(Math.random() * heartArray.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Between 4-7s
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 15 + 18) + 'px'; // Size between 18px - 33px
        container.appendChild(heart);
    }
}

// Function to trigger simple confetti animation when modal opens
function triggerConfetti() {
    const colors = ['#ff4b72', '#ff8fa3', '#ffd166', '#06d6a0', '#118ab2'];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);

        // Remove element after animation completes
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Modal control functions
function openModal() {
    document.getElementById('surpriseModal').style.display = 'flex';
    triggerConfetti();
}

function closeModal() {
    document.getElementById('surpriseModal').style.display = 'none';
}

// Initialize floating background on load
window.onload = () => {
    createHearts();
};