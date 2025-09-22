import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import { slideVariants } from "../../utils/animation";




const ContactRight = () => {
  return (
    <div className="contact-right">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={1}
        variants={slideVariants("top", 0.7, 50, false)}
      >
        I'm always open to discussing product{" "}
        <span>design work or partnerships.</span>
      </motion.p>
      <ContactForm />
    </div>
  );
};

export default ContactRight;
