// ===== SMOOTH SCROLL FUNCTION =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== FLOATING HEARTS ANIMATION =====
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// Create initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}

// ===== SURPRISE REVEAL FUNCTIONALITY =====
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseContent = document.getElementById('surpriseContent');

if (surpriseBtn && surpriseContent) {
    surpriseBtn.addEventListener('click', function() {
        surpriseContent.classList.add('revealed');
        surpriseBtn.style.display = 'none';
        
        // Create confetti effect
        createConfetti();
    });
}

// ===== CONFETTI EFFECT =====
function createConfetti() {
    const colors = ['#ffb3d9', '#e6b3ff', '#ff9999', '#e6e6fa', '#ffd700'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.transition = 'all 3s ease-out';
            
            document.body.appendChild(confetti);
            
            // Animate confetti falling
            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() * 40 - 20)) + '%';
                confetti.style.opacity = '0';
            }, 10);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Observe reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===== MUSIC CONTROL (OPTIONAL) =====
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

// Note: You'll need to add your own audio file
// Uncomment and modify the code below when you add an audio file

/*
const audio = new Audio('your-music-file.mp3');
audio.loop = true;
audio.volume = 0.3;

if (musicBtn) {
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '🎵';
        } else {
            audio.play();
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '🎶';
        }
        isPlaying = !isPlaying;
    });
}
*/

// For now, just show a message when clicked
if (musicBtn) {
    musicBtn.addEventListener('click', function() {
        if (!isPlaying) {
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '🎶';
            alert('To add background music:\n1. Add your music file (e.g., music.mp3) to the project folder\n2. Uncomment the audio code in script.js\n3. Update the file path');
        } else {
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '🎵';
        }
        isPlaying = !isPlaying;
    });
}

// ===== IMAGE PLACEHOLDER INSTRUCTIONS =====
// To add your own photos:
// 1. Save your photos in the same folder as index.html
// 2. Replace the .image-placeholder divs in index.html with:
//    <img src="your-photo.jpg" alt="Description">
// 3. Add this CSS for the images:
//    .gallery-item img {
//        width: 100%;
//        height: 300px;
//        object-fit: cover;
//        border-radius: 15px;
//    }
