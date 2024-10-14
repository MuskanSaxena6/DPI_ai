const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   require('dotenv').config();
   const chatbotRoutes = require('./routes/chatbotRoutes');

   const app = express();

   app.use(cors());
   app.use(express.json());
   app.use('/api/chatbot', chatbotRoutes);

   // Connect to MongoDB
   //mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   //  .then(() => console.log('MongoDB connected'))
   //  .catch(err => console.log(err));

     mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

   // Routes
   app.use('/api/dpi', require('./routes/dpiRoutes'));

   const PORT = process.env.PORT || 5001;

   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));