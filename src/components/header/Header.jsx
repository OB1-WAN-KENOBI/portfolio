import Nav from "../nav/Nav";
import "./Header.css";
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Ilay
          </a>
          <Nav isMenuOpen={isMenuOpen} />
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXing  />
            ) : (
              <FaBarsStaggered />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
