const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")

const app = express()

// Middleware
app.use(express.static("public"))
app.use(express.json())

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your_app_password"
  }
})

// ROUTE TO SEND EMAIL
app.post("/send-email", (req, res) => {

  const { email } = req.body

  const mailOptions = {
    from: "yourgmail@gmail.com",
    to: email,
    subject: "OLFU SIS Notification",
    text: "You have successfully logged in to SIS Fatima."
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send("Error sending email")
    } else {
      res.send("Email sent successfully")
    }
  })
})

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})