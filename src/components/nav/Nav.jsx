import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const navItems = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "clients",
    "contact",
  ];
  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        {navItems.map((navItems, index) => (
          <Link
            to={navItems}
            key={index}
            className="nav-link"
            onClick={handleMenuClick}
          >
            {navItems}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
