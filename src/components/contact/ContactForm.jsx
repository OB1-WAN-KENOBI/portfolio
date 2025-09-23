import { useState } from "react";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa6";
import { slideVariants } from "../../utils/animation";

const BACKEND_URL = "https://server-ds3i.onrender.com/sendTelegram";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const fetchWithTimeout = (url, opts = {}, timeout = 12000) =>
    Promise.race([
      fetch(url, opts),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), timeout)
      ),
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !subject || !message) {
      setStatus({ type: "error", text: "Все поля обязательны" });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", text: "Неверный email" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetchWithTimeout(
        BACKEND_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify({ name, email, subject, message }),
        },
        12000
      );

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error(`Server responded with status ${res.status}`);
      }

      if (res.ok && data?.status === "ok") {
        setStatus({ type: "ok", text: "Сообщение отправлено!" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          text: data?.message || data?.description || `Ошибка: ${res.status}`,
        });
      }
    } catch (err) {
      console.error("send error", err);
      setStatus({ type: "error", text: err.message || "Ошибка при отправке" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form contact-form" onSubmit={handleSubmit} noValidate>
      <motion.div
        className="first-row"
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </motion.div>

      <motion.div
        className="second-row"
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </motion.div>

      <motion.div
        className="third-row"
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </motion.div>

      <motion.button
        className="contact-btn inner-info-link"
        type="submit"
        disabled={loading}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        {loading ? "Отправка..." : "Send Message"} <FaPaperPlane />
      </motion.button>

      {status && (
        <div
          style={{
            marginTop: 12,
            padding: 8,
            borderRadius: 6,
            background: status.type === "ok" ? "#e6ffed" : "#ffe6e6",
            color: status.type === "ok" ? "#0b6623" : "#8a1f1f",
          }}
        >
          {status.text}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
