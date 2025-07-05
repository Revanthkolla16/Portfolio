import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const transporter= nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASS
  }
})

app.post('/api/contact', async (req, res) => {

  try {
    const {name, email, message} = req.body;

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject: "Message from Portfolio's Contact Form",
      text: `Email : ${email}
             Name : ${name}
             Message: ${message}`
    })

    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    res.status(400).json({success: false,message: "Failed to send the message"});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})