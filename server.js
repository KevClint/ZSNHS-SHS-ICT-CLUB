import express from "express";
import fetch from "node-fetch"; // make sure you installed this: npm install node-fetch
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse form data & JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static files (your HTML, CSS, JS)
app.use(express.static(".")); // or "public" if you have a public folder

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const formData = {
      access_key: process.env.WEB3FORMS_KEY, // hidden key from .env
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: "Server error"});
  }
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
