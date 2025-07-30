import SectionTitle from "../sectionTitle/SectionTitle";
import Awords from "./Awords";
import Education from "./Education";
import Skills from "./Skills";
import "./Skills.css";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />
        <div className="inner-content">
          <div className="skills-description">
            <h3>Education & Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </div>
          <div className="skills-info education-all">
            <Education />
            <Skills />
            <Awords />
          </div>
          <div className="education work-exp">
            <h3 className="work-exp-title">Work & Experience</h3>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>Sr. Graphic Designer</h3>
                  <h5>Part Time | Office</h5>
                  <span>2020 - 2021</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Avada Theme.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Cr. Web Developer</h3>
                  <h5>Full Time | InHouse</h5>
                  <span>2019 - 2020</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">ib-themes ltd.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Jr. Web Developer</h3>
                  <h5>Full Time | Remote</h5>
                  <span>2018 - 2019</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Creative Gigs.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
