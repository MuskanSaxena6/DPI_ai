const OpenAI = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handleChatbotMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant explaining DPI services." },
        { role: "user", content: message }
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Error in chatbot:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};