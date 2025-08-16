import { infoLinks, followLinks } from "../../data/footerData";
import "./Footer.css";
import FooterLinkGroup from "./FooterLinkGroup";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Ilay</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={infoLinks}/>

        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks}/>
      </div>
      <p className="footer-copyright">
        © <span className="year">2024</span> by Coding Snow. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer
