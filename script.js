// ===== ROMANTIC INTRO POPUP =====
const introOverlay = document.getElementById('introOverlay');
const introPopup = document.getElementById('introPopup');
const popupTitle = document.getElementById('popupTitle');
const popupQuestion = document.getElementById('popupQuestion');
const popupGif = document.getElementById('popupGif');
const buttonContainer = document.getElementById('buttonContainer');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnEnter = document.getElementById('btnEnter');

let noClickCount = 0;

// Create glowing stars
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

createStars();

// Yes button click
btnYes.addEventListener('click', function() {
    createHeartExplosion();
    popupTitle.textContent = "Okay good, masuklah sayang 😌💙";
    popupQuestion.style.display = 'none';
    popupGif.innerHTML = '💙✨';
    buttonContainer.style.display = 'none';
    btnEnter.style.display = 'block';
});

// No button click
btnNo.addEventListener('click', function() {
    noClickCount++;
    introPopup.classList.add('shake');
    setTimeout(() => introPopup.classList.remove('shake'), 500);
    
    if (noClickCount === 1) {
        popupTitle.textContent = "Eh why you press no 😭 try again…";
        popupGif.innerHTML = '🥺';
        btnNo.classList.add('shrink');
        btnYes.style.transform = 'scale(1.1)';
    } else if (noClickCount === 2) {
        popupTitle.textContent = "You sure ke ni… think properly tau 🥺";
        popupGif.innerHTML = '😢';
        btnNo.style.transform = 'scale(0.6)';
        btnNo.style.padding = '10px 20px';
        btnYes.style.transform = 'scale(1.2)';
    } else if (noClickCount === 3) {
        popupTitle.textContent = "Last chance before I cry in blue...";
        popupGif.innerHTML = '😭💙';
        btnNo.style.transform = 'scale(0.4)';
        btnNo.style.padding = '8px 15px';
        btnNo.style.fontSize = '0.9rem';
        btnYes.style.transform = 'scale(1.3)';
    } else {
        btnNo.style.display = 'none';
        popupTitle.textContent = "I knew it. Don't play with my heart like that 😤💙";
        popupGif.innerHTML = '💙';
        createFloatingHearts();
        setTimeout(() => {
            popupQuestion.style.display = 'none';
            buttonContainer.style.display = 'none';
            btnEnter.style.display = 'block';
        }, 2000);
    }
});

// Enter button click
btnEnter.addEventListener('click', function() {
    introOverlay.classList.add('fade-out');
    setTimeout(() => {
        introOverlay.style.display = 'none';
    }, 1000);
});

// Heart explosion effect
function createHeartExplosion() {
    const colors = ['💙', '💗', '💜', '💛', '🤍'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            heart.textContent = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            const angle = (Math.PI * 2 * i) / 30;
            const distance = 200 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }, i * 30);
    }
}

// Floating hearts effect
function createFloatingHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = '💙';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 200);
    }
}

// ===== FLOATING PARTICLES =====
function createParticle() {
    const particlesContainer = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.innerHTML = '💙';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 8000);
}

setInterval(createParticle, 800);
for (let i = 0; i < 10; i++) {
    setTimeout(createParticle, i * 300);
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    // Set birthday date (change this to actual birthday)
    const birthday = new Date('2025-12-31T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== VERSION CARDS FLIP =====
const versionCards = document.querySelectorAll('.version-card');
versionCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// ===== TYPING ANIMATION FOR LOVE LETTER =====
const letterText = document.getElementById('letterText');
const fullText = `My dearest Aleeya,

As you turn 22, I want you to know how incredibly blessed I feel to have you in my life. You are not just my girlfriend, you are my peace, my home, my everything.

Every day with you feels like a gift. Your smile lights up my darkest days, your laughter is my favorite sound, and your presence makes everything feel right. You've shown me what it means to truly love and be loved.

I wish for you all the happiness in the world. May this year bring you closer to your dreams, fill your heart with joy, and remind you every single day how special you are. You deserve the world, and I promise to do everything I can to give it to you.

Thank you for being you - for your kindness, your strength, your beauty (inside and out), and for choosing me. I love you more than words can express.

Happy Birthday, my love. Here's to forever with you. 💙

With all my heart,
Your forever person`;

let charIndex = 0;

function typeWriter() {
    if (charIndex < fullText.length) {
        letterText.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

// Start typing when letter section is visible
const letterSection = document.getElementById('letter');
const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && charIndex === 0) {
            typeWriter();
        }
    });
}, { threshold: 0.3 });

letterObserver.observe(letterSection);

// ===== SURPRISE BUTTON =====
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', function() {
    surpriseMessage.classList.add('revealed');
    surpriseBtn.style.display = 'none';
    createHeartExplosion();
});

// ===== CHATBOX =====
const chatboxTrigger = document.getElementById('chatboxTrigger');
const chatboxContainer = document.getElementById('chatboxContainer');
const chatboxClose = document.getElementById('chatboxClose');
const chatboxInput = document.getElementById('chatboxInput');
const chatboxSend = document.getElementById('chatboxSend');
const chatboxMessages = document.getElementById('chatboxMessages');

// Romantic responses database
const romanticResponses = {
    greetings: [
        "Hello beautiful Aleeya! 💙 Your presence makes this day so special.",
        "Hi there, lovely! ✨ I hope you're having the most wonderful birthday!",
        "Hey sweetheart! 🥰 It's so nice to chat with you on your special day!"
    ],
    birthday: [
        "Happy Birthday Aleeya! 🎉 You deserve all the love and happiness in the world today and always ❤️",
        "Today is all about celebrating YOU! 🎂 You are deeply appreciated and loved beyond measure 💙",
        "Wishing you the most magical 22nd birthday ever! ✨ May your day be filled with joy and beautiful moments 🥰"
    ],
    feelings: [
        "I'm so glad you're feeling good! 🥰 You deserve all the happiness today!",
        "That's wonderful to hear! ✨ Your joy makes this day even more special 💙",
        "I'm here to make your day even brighter! ❤️ You're amazing Aleeya!",
        "Your happiness means everything! 💙 Keep smiling, beautiful!"
    ],
    appreciation: [
        "You are deeply appreciated today and always ❤️ Never doubt how special you are, Aleeya.",
        "You deserve to be celebrated every single day ✨ Today is just the beginning!",
        "You bring so much light into this world 💙 Thank you for being you!",
        "The world is better because you're in it 🥰 You're truly one of a kind!"
    ],
    love: [
        "You are loved more than words can express ❤️ Today and every day, Aleeya.",
        "Love surrounds you today 💙 You are cherished beyond measure.",
        "You deserve all the love in the world ✨ You're truly special!",
        "Your heart is pure and beautiful 🥰 You are deeply loved!"
    ],
    default: [
        "You're absolutely wonderful Aleeya! ✨ I hope your birthday is as special as you are 💙",
        "Thank you for sharing this moment with me! 🥰 You deserve all the happiness today ❤️",
        "You're amazing! 💙 I hope today brings you countless beautiful memories ✨",
        "What a blessing to celebrate you today! 🎉 You're truly precious ❤️",
        "You make the world brighter just by being in it! 💙 Happy Birthday!",
        "Every moment with you is a gift ✨ You're so special Aleeya!",
        "Your kindness and beauty shine through everything you do 🥰",
        "Today we celebrate the wonderful person you are! 🎂 You're loved so much!"
    ]
};

const keywords = {
    greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    birthday: ['birthday', 'special day', 'my day', 'today', 'celebrate', '22'],
    feelings: ['happy', 'good', 'great', 'wonderful', 'amazing', 'excited', 'blessed', 'feel'],
    appreciation: ['thank', 'appreciate', 'grateful', 'thankful'],
    love: ['love', 'loved', 'care', 'special']
};

// Toggle chatbox
chatboxTrigger.addEventListener('click', function() {
    chatboxContainer.classList.toggle('active');
    if (chatboxContainer.classList.contains('active')) {
        chatboxTrigger.style.display = 'none';
        chatboxInput.focus();
    }
});

chatboxClose.addEventListener('click', function() {
    chatboxContainer.classList.remove('active');
    chatboxTrigger.style.display = 'flex';
});

// Send message
async function sendMessage() {
    const message = chatboxInput.value.trim();
    if (message === '') return;
    
    addMessage(message, 'user');
    chatboxInput.value = '';
    chatboxInput.disabled = true;
    chatboxSend.disabled = true;
    
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
        chatboxInput.disabled = false;
        chatboxSend.disabled = false;
        chatboxInput.focus();
    }, 1000 + Math.random() * 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    chatboxMessages.appendChild(messageDiv);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    for (const [category, words] of Object.entries(keywords)) {
        for (const word of words) {
            if (lowerMessage.includes(word)) {
                const responses = romanticResponses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    const defaultResponses = romanticResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

chatboxSend.addEventListener('click', sendMessage);
chatboxInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});
