import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// Get API key from environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

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

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "API key not configured. Please set GEMINI_API_KEY in .env file" 
      });
    }

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${SYSTEM_PROMPT}\n\nUser message: ${userMessage}\n\nRespond in a romantic, caring way:`
            }]
          }],
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 150,
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract AI response
    const aiResponse = data.candidates[0].content.parts[0].text;
    
    res.json({ response: aiResponse });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      error: "Failed to get AI response",
      message: error.message 
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Birthday website backend is running!",
    apiKeyConfigured: !!GEMINI_API_KEY
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎂 Birthday website server running on http://localhost:${PORT}`);
  console.log(`✅ API Key configured: ${GEMINI_API_KEY ? 'Yes' : 'No'}`);
  if (!GEMINI_API_KEY) {
    console.log('⚠️  Warning: GEMINI_API_KEY not found in .env file');
  }
});
