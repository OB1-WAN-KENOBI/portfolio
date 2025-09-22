import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa6";
import { slideVariants } from "../../utils/animation";

const ContactForm = () => {
  return (
    <form className="form contact-form">
      <motion.div
        className="first-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={1}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <input placeholder="Name" type="text" />
      </motion.div>
      <motion.div
        className="second-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={2}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </motion.div>
      <motion.div
        className="third-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={3}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        <textarea placeholder="Message"></textarea>
      </motion.div>
      <motion.button
        className="contact-btn inner-info-link"
        type="submit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={4}
        variants={slideVariants("top", 0.7, 50, true)}
      >
        Send Message
        <FaPaperPlane />
      </motion.button>
    </form>
  );
};

export default ContactForm;
