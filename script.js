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


// ===== ROMANTIC AI CHATBOX WITH SMART RESPONSES =====
const chatboxTrigger = document.getElementById('chatboxTrigger');
const chatboxContainer = document.getElementById('chatboxContainer');
const chatboxToggle = document.getElementById('chatboxToggle');
const chatboxInput = document.getElementById('chatboxInput');
const chatboxSend = document.getElementById('chatboxSend');
const chatboxMessages = document.getElementById('chatboxMessages');

// Romantic AI responses database
const romanticResponses = {
    greetings: [
        "Hello beautiful! 💕 Your presence makes this day so special.",
        "Hi there, lovely! ✨ I hope you're having the most wonderful birthday!",
        "Hey sweetheart! 🥰 It's so nice to chat with you on your special day!"
    ],
    birthday: [
        "Happy Birthday! 🎉 You deserve all the love and happiness in the world today and always ❤️",
        "Today is all about celebrating YOU! 🎂 You are deeply appreciated and loved beyond measure 💕",
        "Wishing you the most magical birthday ever! ✨ May your day be filled with joy and beautiful moments 🥰"
    ],
    compliments: [
        "You have such a beautiful soul ❤️ Your kindness touches everyone around you.",
        "Your smile lights up the world ✨ Never forget how special you are!",
        "You are absolutely precious 💕 Your presence makes everything better.",
        "The way you care for others is truly inspiring 🥰 You have such a warm heart.",
        "You radiate positivity and love ✨ That's such a beautiful quality!"
    ],
    feelings: [
        "I'm so glad you're feeling good! 🥰 You deserve all the happiness today!",
        "That's wonderful to hear! ✨ Your joy makes this day even more special 💕",
        "I'm here to make your day even brighter! ❤️ You're amazing!",
        "Your happiness means everything! 💕 Keep smiling, beautiful!"
    ],
    appreciation: [
        "You are deeply appreciated today and always ❤️ Never doubt how special you are.",
        "You deserve to be celebrated every single day ✨ Today is just the beginning!",
        "You bring so much light into this world 💕 Thank you for being you!",
        "The world is better because you're in it 🥰 You're truly one of a kind!"
    ],
    encouragement: [
        "You are stronger than you know ✨ Keep shining bright!",
        "Believe in yourself as much as others believe in you 💕 You're incredible!",
        "You have so much to offer the world ❤️ Never forget your worth!",
        "Your potential is limitless ✨ Keep being the amazing person you are!"
    ],
    love: [
        "You are loved more than words can express ❤️ Today and every day.",
        "Love surrounds you today 💕 You are cherished beyond measure.",
        "You deserve all the love in the world ✨ You're truly special!",
        "Your heart is pure and beautiful 🥰 You are deeply loved!"
    ],
    default: [
        "You're absolutely wonderful! ✨ I hope your birthday is as special as you are 💕",
        "Thank you for sharing this moment with me! 🥰 You deserve all the happiness today ❤️",
        "You're amazing! 💕 I hope today brings you countless beautiful memories ✨",
        "What a blessing to celebrate you today! 🎉 You're truly precious ❤️",
        "You make the world brighter just by being in it! 💕 Happy Birthday!",
        "Every moment with you is a gift ✨ You're so special!",
        "Your kindness and beauty shine through everything you do 🥰",
        "Today we celebrate the wonderful person you are! 🎂 You're loved so much!"
    ]
};

// Keywords to trigger specific responses
const keywords = {
    greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    birthday: ['birthday', 'special day', 'my day', 'today', 'celebrate'],
    feelings: ['happy', 'good', 'great', 'wonderful', 'amazing', 'excited', 'blessed', 'feel'],
    appreciation: ['thank', 'appreciate', 'grateful', 'thankful'],
    love: ['love', 'loved', 'care', 'special'],
    compliments: ['beautiful', 'pretty', 'nice', 'sweet', 'kind']
};

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
    
    // Generate and show bot response after delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message);
        addMessage(response, 'bot');
        
        // Re-enable input
        chatboxInput.disabled = false;
        chatboxSend.disabled = false;
        chatboxInput.focus();
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
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

// Generate AI response based on message
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for keyword matches
    for (const [category, words] of Object.entries(keywords)) {
        for (const word of words) {
            if (lowerMessage.includes(word)) {
                const responses = romanticResponses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    
    // Default response if no keywords match
    const defaultResponses = romanticResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
