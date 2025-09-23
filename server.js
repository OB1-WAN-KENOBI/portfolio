import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post("/sendTelegram", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const text = `Имя: ${name}\nEmail: ${email}\nТема: ${subject}\nСообщение: ${message}`;

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.ok)
      return res
        .status(500)
        .json({ status: "error", message: data.description });

    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
