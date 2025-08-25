import React from "react";
import "../../App.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#product">PRODUCT</a>
          </li>
          <li>
            <a href="#contact us">CONTACT US</a>
          </li>
          <button>search</button>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
