import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({success: false, message: "Method not allowed"});
  }

  const {name, email, message, botcheck} = req.body;

  if (botcheck) {
    return res.status(400).json({success: false, message: "Bot detected"});
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
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
}
