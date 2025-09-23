import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Разрешённые фронтенды
const allowedOrigins = ["https://ob1-wan-kenobi.github.io"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Обработка preflight (OPTIONS) запросов
app.options("/sendTelegram", cors());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post("/sendTelegram", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ status: "error", message: "Все поля обязательны" });
  }

  const text = `Имя: ${name}\nEmail: ${email}\nТема: ${subject}\nСообщение: ${message}`;

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.ok) {
      return res
        .status(500)
        .json({ status: "error", message: data.description });
    }

    res.json({ status: "ok" });
  } catch (err) {
    console.error("Ошибка при отправке в Telegram:", err.message);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
