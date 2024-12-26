const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'umar.zangroups@gmail.com',
    pass: 'yfbpo tnrk yaqr uvgz', 
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: 'umar.zangroups@gmail.com',
      to,
      subject,
      text,
    });
    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error('Error sending email:', err);
  }
};

module.exports = sendEmail;
