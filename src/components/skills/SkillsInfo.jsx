import SectionTitle from "../sectionTitle/SectionTitle";
import Education from "./Education";
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
            <div className="education">
              <h4 className="label">Skills</h4>
              <ul className="bars">
                <li className="bar">
                  <div className="info">
                    <span>html</span>
                    <span>95%</span>
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>css</span>
                    <span>85%</span>
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Javascript</span>
                    <span>85%</span>
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Jquery</span>
                    <span>80%</span>
                  </div>
                  <div className="line jquery"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>php</span>
                    <span>75%</span>
                  </div>
                  <div className="line php"></div>
                </li>
              </ul>
            </div>
            <div className="education">
              <h4 className="label">Awards</h4>
              <ul className="education-list">
                <li className="item">
                  <span className="year">2021</span>
                  <p>
                    <span>Best Developer</span> - University Of Melbourne, NA
                  </p>
                </li>
                <li className="item">
                  <span className="year">2020</span>
                  <p>
                    <span>Best Writter</span> - Online Typodev Soluation Ltd.
                  </p>
                </li>
                <li className="item">
                  <span className="year">2019</span>
                  <p>
                    <span>Best Freelancer</span> - Fiver & Upwork Level 2 & Top
                    Rated
                  </p>
                </li>
              </ul>
            </div>
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
