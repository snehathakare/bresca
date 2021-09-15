import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

export const Footer = () => {
  return (
    <div className="footer-items">
      <ul className="left-links">
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={instagram} />
        </li>
      </ul>
      <ul className="right-menu">
        <li>MICHELIN GUIDE 2021</li>
        <li>BUZZ</li>
        <li>EMAIL</li>
        <li>SIGN UP</li>
      </ul>
    </div>
  );
};
