# 🚀 Deploy to Vercel - Step by Step Guide

## Step 1: Push Your Code to GitHub

Your code is already on GitHub at: https://github.com/FarizRisiko/birthday-website

Make sure all the latest changes are pushed:
```bash
git add .
git commit -m "Add Vercel configuration"
git push
```

## Step 2: Create Vercel Account

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Sign in with your GitHub account (FarizRisiko)
4. Authorize Vercel to access your repositories

## Step 3: Import Your Project

1. After signing in, click **"Add New..."** → **"Project"**
2. Find and select **"birthday-website"** from your repositories
3. Click **"Import"**

## Step 4: Configure Your Project

On the configuration page:

1. **Framework Preset:** Select "Other"
2. **Root Directory:** Leave as `./`
3. **Build Command:** Leave empty or use `npm install`
4. **Output Directory:** Leave empty
5. **Install Command:** `npm install`

## Step 5: Add Environment Variable (IMPORTANT!)

Before deploying, you MUST add your Gemini API key:

1. Scroll down to **"Environment Variables"** section
2. Click **"Add"**
3. Enter:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your actual Gemini API key (get it from https://makersuite.google.com/app/apikey)
4. Click **"Add"**

## Step 6: Deploy!

1. Click **"Deploy"** button
2. Wait 1-2 minutes for deployment to complete
3. You'll get a URL like: `https://birthday-website-xyz.vercel.app`

## Step 7: Test Your Website

1. Click on the deployment URL
2. Test the AI chatbox by clicking the 💬 button
3. Send a message to verify the AI is working

## 🎉 Done!

Your website is now live with:
- ✅ Secure API key (hidden on backend)
- ✅ AI chatbox working
- ✅ Free hosting forever
- ✅ Automatic HTTPS
- ✅ Fast global CDN

## 📝 Important Notes

- **Never commit `.env` file** - It's already in `.gitignore`
- **API key is safe** - Only stored in Vercel's environment variables
- **Free tier** - Vercel gives you free hosting with generous limits
- **Custom domain** - You can add your own domain later in Vercel settings

## 🔄 Update Your Website Later

Whenever you make changes:
```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically redeploy your website!

## 🆘 Troubleshooting

**Chatbox not working?**
- Make sure you added `GEMINI_API_KEY` in Vercel environment variables
- Check the deployment logs in Vercel dashboard

**Need to update API key?**
- Go to Vercel dashboard → Your project → Settings → Environment Variables
- Edit the `GEMINI_API_KEY` value
- Redeploy the project

## 📧 Share with Your Girlfriend

Once deployed, share the Vercel URL with her:
`https://your-project-name.vercel.app`

She can access it from any device! 💕
