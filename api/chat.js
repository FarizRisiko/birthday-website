// Vercel Serverless Function for Gemini AI Chat

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

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return res.status(200).json({ 
        response: "I'm having trouble connecting right now, but you're absolutely wonderful! 💕"
      });
    }

    // Call Gemini API using native fetch (available in Node 18+)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error: ${response.status}`, errorText);
      return res.status(200).json({ 
        response: "You're absolutely wonderful! ✨ I hope your birthday is as special as you are 💕"
      });
    }

    const data = await response.json();
    
    // Extract AI response
    const aiResponse = data.candidates[0].content.parts[0].text;
    
    return res.status(200).json({ response: aiResponse });

  } catch (error) {
    console.error("Error in chat handler:", error);
    return res.status(200).json({ 
      response: "You're absolutely wonderful! ✨ I hope your birthday is as special as you are 💕"
    });
  }
};
