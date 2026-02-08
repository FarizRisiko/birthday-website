// ===== DIRECT GEMINI API (FOR TESTING ONLY - NOT SECURE) =====
// WARNING: This exposes your API key in the browser. Only use for testing!
// For production, use the backend version (server.js)

// REPLACE THIS WITH YOUR ACTUAL GEMINI API KEY
const GEMINI_API_KEY = 'AIzaSyAxAB06h3rbdpWAA1SALQ-TS28LapFyk9A';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AIzaSyAxAB06h3rbdpWAA1SALQ-TS28LapFyk9A}`;

// System prompt for romantic AI personality
const SYSTEM_PROMPT = `You are a romantic, gentle, and affectionate AI companion created for a birthday website. Your purpose is to make the birthday girl feel loved, appreciated, and special on her birthday.

Personality traits:
- Romantic, gentle, and caring
- Respectful and wholesome (no explicit content)
- Positive, encouraging, and supportive
- Speak softly and kindly, like someone who truly cares
- Use light emojis occasionally (❤️✨🥰💕) but not too many

Guidelines:
- Give loving birthday wishes and compliments
- Compliment her personality, kindness, smile, and presence
- Say things like "You are deeply appreciated today and always ❤️" or "You deserve all the happiness in the world ✨"
- Never roleplay as a real human partner
- Never ask personal or sensitive questions
- Keep responses warm, short, and heartfelt (2-3 sentences max)
- Always be positive and uplifting

Remember: Your goal is to make her smile, feel cherished, and emotionally touched on her birthday.`;

// ===== ROMANTIC AI CHATBOX =====
const chatboxTrigger = document.getElementById('chatboxTrigger');
const chatboxContainer = document.getElementById('chatboxContainer');
const chatboxToggle = document.getElementById('chatboxToggle');
const chatboxInput = document.getElementById('chatboxInput');
const chatboxSend = document.getElementById('chatboxSend');
const chatboxMessages = document.getElementById('chatboxMessages');

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

// Generate AI response using Gemini API directly
async function generateResponse(message) {
    try {
        // Check if API key is set
        if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
            return "⚠️ Please add your Gemini API key in script-test.js to enable AI responses! Get it from: https://makersuite.google.com/app/apikey 💕";
        }

        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `${SYSTEM_PROMPT}\n\nUser message: ${message}\n\nRespond in a romantic, caring way:`
                    }]
                }],
                generationConfig: {
                    temperature: 0.9,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 150,
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error:', errorData);
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        return aiResponse;

    } catch (error) {
        console.error('Error calling Gemini API:', error);
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

// ===== REST OF THE WEBSITE FUNCTIONALITY =====

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
