const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');


router.post('/', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error in POST /feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const { email, sort } = req.query;
    let query = {};
    if (email) query.email = email;
    
    let sortOption = {};
    if (sort === 'newest') sortOption = { timestamp: -1 };
    if (sort === 'oldest') sortOption = { timestamp: 1 };
    
    const feedbacks = await Feedback.find(query).sort(sortOption);
    res.json(feedbacks);
  } catch (error) {
    console.error('Error in GET /feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
