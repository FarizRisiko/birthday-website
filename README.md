# 💝 Birthday Website for Your Girlfriend

A romantic and emotional birthday website created as a heartfelt gift with AI-powered chatbox.

## 🎨 Features

- **Landing Page** - Beautiful welcome with her name and romantic message
- **Love Message** - Heartfelt birthday wishes in an elegant card
- **Memories Gallery** - Photo gallery with hover effects (placeholders included)
- **Why She's Special** - Cards explaining what makes her precious
- **Surprise Section** - Interactive reveal with confetti animation
- **AI Chatbox** - Romantic AI companion powered by Google Gemini (secure backend)
- **Final Message** - Romantic closing note
- **Floating Hearts** - Gentle background animation
- **Music Control** - Optional background music button
- **Fully Responsive** - Works perfectly on mobile and desktop

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Gemini API Key
1. Get a FREE API key from: https://makersuite.google.com/app/apikey
2. Open `.env` file
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```
   GEMINI_API_KEY=AIzaSyAbc123YourActualKeyHere
   ```

### 3. Start the Server
```bash
npm start
```

### 4. Open the Website
Open your browser and go to: http://localhost:3000

## 🔒 Security Features

✅ **API Key is SAFE** - Stored in `.env` file (never committed to GitHub)  
✅ **Backend Protection** - API key never exposed to frontend  
✅ **Professional Setup** - Industry-standard security practices  
✅ **`.gitignore`** - Automatically prevents `.env` from being uploaded

## ✏️ Customization Guide

### Change Her Name
In `index.html`, find and replace `[Her Name]` with her actual name.

### Edit Love Messages
All text content is in `index.html`. Simply find the sections and edit:
- Landing subtitle
- Love message section
- Photo captions
- Reason cards
- Surprise message
- Final message

### Add Your Photos
1. Save your photos in the same folder as `index.html`
2. In `index.html`, replace the `.image-placeholder` divs with:
   ```html
   <img src="photo1.jpg" alt="Description" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px;">
   ```

### Change Colors
In `styles.css`, modify the color variables at the top:
```css
--primary-pink: #ffb3d9;
--soft-purple: #e6b3ff;
--cream: #fff5f7;
--soft-red: #ff9999;
--lavender: #e6e6fa;
```

### Add Background Music (Optional)
1. Add your music file (e.g., `music.mp3`) to the project folder
2. In `script.js`, uncomment the audio code section
3. Update the file path: `const audio = new Audio('music.mp3');`

## 🌐 Deploy to Production

### Option 1: Deploy Backend + Frontend Together
Use platforms like:
- **Render** (free tier available)
- **Railway** (free tier available)
- **Heroku**

### Option 2: Separate Deployment
- **Backend**: Deploy `server.js` to Render/Railway
- **Frontend**: Deploy to GitHub Pages
- Update `BACKEND_URL` in `script.js` to your backend URL

### Important for Deployment:
1. Set environment variable `GEMINI_API_KEY` on your hosting platform
2. Update `BACKEND_URL` in `script.js` if backend is on different domain
3. Make sure `.env` is in `.gitignore` (already done!)

## 📁 Project Structure

```
birthday-website/
├── index.html          # Main website
├── styles.css          # All styling
├── script.js           # Frontend logic + chatbox
├── server.js           # Secure backend API
├── package.json        # Dependencies
├── .env                # API key (NEVER commit this!)
├── .gitignore          # Protects sensitive files
└── README.md           # This file
```

## 🤖 AI Chatbox Features

- Romantic, caring personality
- Responds naturally to any message
- Gives birthday wishes and compliments
- Makes her feel loved and special
- Uses emojis like ❤️✨🥰💕
- Typing animation for realistic feel

## 📱 Mobile Friendly

The website automatically adapts to any screen size for the perfect experience on phones, tablets, and computers.

## 💕 Made with Love

This website was created to make someone special feel loved and appreciated on their birthday.

## 🆘 Troubleshooting

**Chatbox not responding?**
- Make sure you added your API key in `.env`
- Check if server is running (`npm start`)
- Open browser console (F12) to see any errors

**Can't install dependencies?**
- Make sure Node.js is installed: https://nodejs.org/
- Run `npm install` again

**Port 3000 already in use?**
- Change `PORT=3000` to `PORT=3001` in `.env` file

