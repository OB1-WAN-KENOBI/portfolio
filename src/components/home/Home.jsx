import "./Home.css";
import { FaInstagram, FaGithub, FaPaperPlane } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants, slideVariants } from "../../utils/animation";

const icons = [
  { id: 1, href: "https://t.me/The_darkness_in_you", icon: <FaPaperPlane /> },
  {
    id: 2,
    href: "https://www.instagram.com/white_brooo/",
    icon: <FaInstagram />,
  },
  { id: 3, href: "https://github.com/OB1-WAN-KENOBI", icon: <FaGithub /> },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <motion.a
              href={item.href}
              target="_blank"
              key={item.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideVariants("left", 0.5, 100, true)}
          >
            Hi, I am Maksim
          </motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideVariants("left", 0.7, 120, true)}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={3}
            variants={slideVariants("left", 0.9, 140, true)}
          >
            I create stunning websites for your business, Highly experienced in
            web design and development
          </motion.p>
          <motion.a
            href="https://t.me/The_darkness_in_you"
            className="home-info-link inner-info-link"
            target="_blank"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={4}
            variants={slideVariants("left", 0.9, 160, true)}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideVariants("right", 0.9, 150, true)}
        >
          <img src={mainImg} alt="man" />
        </motion.div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;
