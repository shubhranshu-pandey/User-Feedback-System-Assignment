const mongoose = require('mongoose');
const Feedback = require('../models/Feedback');

let conn = null;

async function connectToDatabase() {
  if (conn == null) {
    conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return conn;
}

module.exports = async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, email, feedback } = req.body;
      const newFeedback = new Feedback({ name, email, feedback });
      await newFeedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
      console.error('Error in POST /api/feedback:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const { email, sort } = req.query;
      let query = {};
      if (email) query.email = email;

      let sortOption = {};
      if (sort === 'newest') sortOption = { timestamp: -1 };
      if (sort === 'oldest') sortOption = { timestamp: 1 };

      const feedbacks = await Feedback.find(query).sort(sortOption);
      res.status(200).json(feedbacks);
    } catch (error) {
      console.error('Error in GET /api/feedback:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}; 