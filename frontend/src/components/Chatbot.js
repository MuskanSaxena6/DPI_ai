import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

function Chatbot() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('/api/chatbot', { message: input });
      setMessages([...newMessages, { text: response.data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <Typography key={index} variant="body1" style={{ marginBottom: '10px' }}>
            <strong>{msg.sender === 'user' ? 'You: ' : 'Bot: '}</strong>
            {msg.text}
          </Typography>
        ))}
      </div>
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t('chatbotPlaceholder')}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={sendMessage}>
        {t('sendMessage')}
      </Button>
    </Paper>
  );
}

export default Chatbot;