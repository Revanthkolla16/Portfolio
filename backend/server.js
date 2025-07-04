import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

app.get('/',(req,res) => {
  res.send("Hello World");
})

app.post('/api/contact', (req, res) => {

  try {
    const {name, email, message} = req.body;

    res.status(200).json({ success: true, message: "Message sent successfully" });

    console.log(name, email, message);

  } catch (error) {
    res.status(400).json({success: false,message: "Failed to send the message"});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})