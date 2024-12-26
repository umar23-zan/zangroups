const express = require('express');
const Contact = require('../models/Contact');
const sendEmail = require('../utils/mailer');

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send acknowledgment email to the user
    await sendEmail(email, 'Contact Form Submission', 'Thank you for reaching out! We will get back to you shortly.');

    // Notify your team
    await sendEmail('your-team-email@gmail.com', 'New Contact Form Submission', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    res.status(201).json({ message: 'Your message has been received. Thank you!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
