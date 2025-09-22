import { motion } from "motion/react";
import { ContactData } from "../../data/ContactData";
import { slideVariants } from "../../utils/animation";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideVariants("top", 0.7, 50, false)}
      >
        Let's discuss your project
      </motion.h2>
      <ul className="contact-list">
        {ContactData.map((item, index) => (
          <motion.li
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideVariants("top", 0.7, 50, true)}
          >
            <h3>
              <item.icon />
              {item.title}
            </h3>
            <span>
              <a href={item.link}>+00 123-777-9999</a>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
