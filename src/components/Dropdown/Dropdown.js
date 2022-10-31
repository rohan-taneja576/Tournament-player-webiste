import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../Navbar/MenuItems";
import "./Dropdown.css";

const Dropdown = ({ name }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        className={
          click ? `dropdownmenu clicked ${name}` : `dropdownmenu ${name}`
        }
        onClick={handleClick}
      >
        {MenuItems[0][name]?.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
