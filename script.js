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


// ===== ROMANTIC AI CHATBOX WITH GEMINI AI =====
const chatboxTrigger = document.getElementById('chatboxTrigger');
const chatboxContainer = document.getElementById('chatboxContainer');
const chatboxToggle = document.getElementById('chatboxToggle');
const chatboxInput = document.getElementById('chatboxInput');
const chatboxSend = document.getElementById('chatboxSend');
const chatboxMessages = document.getElementById('chatboxMessages');

// ===== BACKEND API CONFIGURATION =====
// The API key is now safely stored on the backend server
// Automatically detects if running locally or on Vercel
const BACKEND_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/chat' 
    : '/chat';

// Toggle chatbox visibility
chatboxTrigger.addEventListener('click', function() {
    chatboxContainer.classList.add('active');
    chatboxTrigger.style.display = 'none';
    chatboxInput.focus();
});

chatboxToggle.addEventListener('click', function() {
    chatboxContainer.classList.remove('active');
    chatboxTrigger.style.display = 'flex';
});

// Send message function
async function sendMessage() {
    const message = chatboxInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    chatboxInput.value = '';
    
    // Disable input while processing
    chatboxInput.disabled = true;
    chatboxSend.disabled = true;
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate and show bot response
    try {
        const response = await generateResponse(message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    } catch (error) {
        hideTypingIndicator();
        addMessage("I'm having trouble responding right now, but you're amazing! 💕", 'bot');
    } finally {
        // Re-enable input
        chatboxInput.disabled = false;
        chatboxSend.disabled = false;
        chatboxInput.focus();
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatboxMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message');
    typingDiv.id = 'typingIndicator';
    
    const indicatorDiv = document.createElement('div');
    indicatorDiv.classList.add('typing-indicator');
    indicatorDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    
    typingDiv.appendChild(indicatorDiv);
    chatboxMessages.appendChild(typingDiv);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Generate AI response using backend API (secure)
async function generateResponse(message) {
    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message
            })
        });

        if (!response.ok) {
            throw new Error('Backend request failed');
        }

        const data = await response.json();
        return data.response;

    } catch (error) {
        console.error('Error calling backend API:', error);
        // Fallback response if API fails
        return "You're absolutely wonderful! ✨ I hope your birthday is as special as you are 💕";
    }
}

// Event listeners
chatboxSend.addEventListener('click', sendMessage);

chatboxInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Auto-open chatbox after 3 seconds (optional)
setTimeout(() => {
    if (!chatboxContainer.classList.contains('active')) {
        chatboxTrigger.style.animation = 'bounce 0.5s ease-in-out 3';
    }
}, 3000);
