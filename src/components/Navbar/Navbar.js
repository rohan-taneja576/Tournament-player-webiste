import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
// import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showNavBG, setShowNavBG] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
  };

  const showNavbarBG = () => {
    if (window.innerWidth < 960) {
      setShowNavBG(false);
    } else {
      setShowNavBG(true);
    }
  };

  useEffect(() => {
    showNavbarBG();
  }, []);

  window.addEventListener("resize", showNavbarBG);
  return (
    <nav className="Navbar-Items">
      <Link to="/" className="nav-logo">
        Tournament Player
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={clicked ? "nav-menu active" : "nav-menu"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li className="nav-item">
          <Link className="nav-links" to="/about-us" onClick={closeMobileMenu}>
            About us <i className="fas fa-caret-down" />
          </Link>
        </li>
        {dropdown && <Dropdown />}
        <li className="nav-item">
          <Link
            className="nav-links"
            to="/tournaments"
            onClick={closeMobileMenu}
          >
            Tournaments <i className="fas fa-caret-down" />
          </Link>
        </li>
        {dropdown && <Dropdown />}
        <li className="nav-item">
          <Link className="nav-links" to="/tour-news" onClick={closeMobileMenu}>
            Tour news
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/shop" onClick={closeMobileMenu}>
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/travels" onClick={closeMobileMenu}>
            Travels
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-links"
            to="/investors-or-partners"
            onClick={closeMobileMenu}
          >
            For investors/partners <i className="fas fa-caret-down" />
          </Link>
        </li>
        {dropdown && <Dropdown />}
        <li className="nav-item">
          <Link
            className="nav-links"
            to="/our-members"
            onClick={closeMobileMenu}
          >
            Our members <i className="fas fa-caret-down" />
          </Link>
        </li>
        {dropdown && <Dropdown />}
        <li className="nav-item">
          <Link className="nav-links" to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        {/* {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      </ul>
      <Button>Login/become a member</Button>
    </nav>
  );
};

export default Navbar;
