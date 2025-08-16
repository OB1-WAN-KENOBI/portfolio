import { Link } from "react-scroll";

const FooterLinkGroup = () => {
  return (
    <>
      <div className="info-group">
        <h3>More</h3>
        <ul>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="follow-group">
        <h3>Follow</h3>
        <ul>
          <li>
            <a href="" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinkGroup;
