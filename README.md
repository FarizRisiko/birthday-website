# � Birthday Website for Aleeya Farzana

A romantic blue-themed birthday surprise website with beautiful animations and interactive features.

## 🎨 Features

- ✨ Romantic intro popup with "Do you love me?" interaction
- 💙 Hero section with background image
- ⏰ Live countdown timer to birthday
- 📸 "Many Versions of Aleeya" - 9 image cards with labels
- 🖼️ Memories section with 4 photo cards
- 💌 Love letter with typing animation
- 🎁 Hidden surprise button
- 💬 Smart chatbox with romantic responses
- 📱 Fully responsive design

## �️ How to Replace Images

### Hero Section (First Page)
Replace this line in `index.html` (around line 45):
```html
<img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800" alt="Hero" class="hero-image">
```
Change to:
```html
<img src="your-image.jpg" alt="Hero" class="hero-image">
```

### Many Versions Section (9 images)
Find these lines in `index.html` (around lines 75-120) and replace the `src` URLs:
```html
<img src="https://images.unsplash.com/..." alt="Cantik" class="version-image">
```
Change to:
```html
<img src="cantik.jpg" alt="Cantik" class="version-image">
```

Do this for all 9 images:
1. Cantik
2. Comey
3. Gorgeous
4. Ayu
5. Goofy
6. Manja
7. Clingy
8. Strong
9. Soft

### Memories Section (4 images)
Find these lines in `index.html` (around lines 130-160) and replace:
```html
<img src="https://images.unsplash.com/..." alt="Memory 1" class="memory-photo">
```
Change to:
```html
<img src="memory1.jpg" alt="Memory 1" class="memory-photo">
```

## 📝 Customization

### Change Birthday Date
In `script.js` (line 145), update:
```javascript
const birthday = new Date('2025-12-31T00:00:00').getTime();
```

### Edit Love Letter
In `script.js` (line 150), edit the `fullText` variable with your own message.

### Change Captions
In `index.html`, edit the text inside `<div class="memory-caption">` tags.

## 🚀 Deployment

### Push to GitHub
```bash
git add .
git commit -m "Update images and content"
git push
```

Vercel will automatically redeploy your website!

## 📁 File Structure

```
birthday-website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 💕 Made with Love

Created for Aleeya Farzana's 22nd birthday 💙
