import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideVariants } from "../../utils/animation";
import { profList } from "../../data/profList";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        <div className="about-wrapper">
          <motion.div
            className="about-img"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideVariants("left", 0.9, 100, false)}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideVariants("right", 0.5, 50, true)}
              >
                I'm Maksim
              </motion.h3>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideVariants("right", 0.5, 50, true)}
              >
                A Lead <span>Front-End Developer</span> based in{" "}
                <span>California</span>
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideVariants("right", 0.5, 50, true)}
              >
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li
                  className="list-item"
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={index}
                  variants={slideVariants("right", 0.5, 40, true)}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href=""
              className="inner-info-link"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideVariants("bottom", 0.7, 150, false)}
            >
              Download
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
