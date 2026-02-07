# 💝 Birthday Website for Your Girlfriend

A romantic and emotional birthday website created as a heartfelt gift.

## 🎨 Features

- **Landing Page** - Beautiful welcome with her name and romantic message
- **Love Message** - Heartfelt birthday wishes in an elegant card
- **Memories Gallery** - Photo gallery with hover effects (placeholders included)
- **Why She's Special** - Cards explaining what makes her precious
- **Surprise Section** - Interactive reveal with confetti animation
- **Final Message** - Romantic closing note
- **Floating Hearts** - Gentle background animation
- **Music Control** - Optional background music button
- **Fully Responsive** - Works perfectly on mobile and desktop

## 🚀 How to Use

1. Open `index.html` in any web browser
2. Customize the content (see below)

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

## 📱 Mobile Friendly

The website automatically adapts to any screen size for the perfect experience on phones, tablets, and computers.

## 💕 Made with Love

This website was created to make someone special feel loved and appreciated on their birthday.
