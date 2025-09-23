import { useState } from "react";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa6";
import { slideVariants } from "../../utils/animation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });


      const data = await res.json();

      if (data.status === "ok") {
        alert("Сообщение отправлено в Telegram!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Ошибка: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке сообщения.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form contact-form" onSubmit={handleSubmit}>
      <motion.div
        className="first-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={1}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={2}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={3}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={4}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        {loading ? "Отправка..." : "Send Message"} <FaPaperPlane />
      </motion.button>
    </form>
  );
};

export default ContactForm;
