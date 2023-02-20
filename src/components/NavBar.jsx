import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default NavBar;
