import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const corsoptions={
  origin:"https://revanthkolla.vercel.app/",
  credentials: true
}

app.use(cors(
  corsoptions
))
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASS
  },
  secure: true,
  tls: {
    rejectUnauthorized: false
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
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

    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({
      success: false,
      message: "Failed to send the message"
    });
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})