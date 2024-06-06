const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// create a transporter object using your email provider's SMTP information
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'your-email-address',
    pass: 'your-email-password'
  }
});

// define a route to handle the POST request
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // define the email message
  const mailOptions = {
    from: 'your-email-address',
    to: 'recipient-email-address',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email.');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send('Email sent successfully.');
    }
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});