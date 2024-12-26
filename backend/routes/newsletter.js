const express = require('express');
const Newsletter = require('../models/Newsletter')
const sendEmail = require('../utils/mailer');

const router = express.Router();

router.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'You are already subscribed to the newsletter.' });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    // Send acknowledgment email
    await sendEmail(email, 'Newsletter Subscription', 'Thank you for subscribing to our newsletter!');

    res.status(201).json({ message: 'Successfully subscribed to the newsletter!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
