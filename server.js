require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch"); // or native fetch in Node 18+
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/contact", async (req, res) => {
  const {name, email, message, botcheck} = req.body;

  if (botcheck)
    return res.status(400).json({success: false, message: "Bot detected"});

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY, // secret key from .env
        name,
        email,
        message
      })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: "Server error"});
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
