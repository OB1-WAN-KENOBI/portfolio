import { motion } from "motion/react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Awords from "./Awords";
import Education from "./Education";
import Skills from "./Skills";
import "./Skills.css";
import WorkExperience from "./WorkExperience";
import { slideVariants } from "../../utils/animation";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />
        <div className="inner-content">
          <motion.div
            className="skills-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideVariants("top", 0.5, 50, true)}
          >
            <h3>Education & Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </motion.div>
          <div className="skills-info education-all">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={1}
              variants={slideVariants("top", 0.7, 50, true)}
            >
              <Education />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={2}
              variants={slideVariants("top", 0.7, 50, true)}
            >
              <Skills />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={3}
              variants={slideVariants("top", 0.7, 50, true)}
            >
              <Awords />
            </motion.div>
          </div>
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
