require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin:["http://localhost:5173","https://ourportfolio-wine.vercel.app/"]
}));
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, //do not reject self-signed certificates  
  },
});

// Email Sending Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(email)

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const mailOptions = {
    from: `"Your Name" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: name,
    html: `<p>${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!", info });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, messge: "Internal server error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
