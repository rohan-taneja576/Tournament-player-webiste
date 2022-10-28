import React from "react";
import "./Button.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className="btn btn--medium" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
