import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASS
  }
})

// Test email configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Email configuration error:', error)
  } else {
    console.log('Email server is ready to send messages')
  }
})

app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body)
  
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      console.log('Missing required fields')
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject: "Message from Portfolio's Contact Form",
      text: `Email: ${email}\nName: ${name}\nMessage: ${message}`
    }

    console.log('Attempting to send email...')
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')

    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({
      success: false,
      message: "Failed to send the message: " + error.message
    });
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})