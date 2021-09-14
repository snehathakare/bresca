import React from "react";
import "./../../assets/sass/style.scss";

export const Header = () => {
  return (
    <div>
      <div className="header-secondary">
        <span>1906 14TH STREET NW, WASHINGTON, DC 20009 (202) 518-7926</span>
      </div>
      <div className="header-primary">
        <div>
          <h1>logo</h1>
        </div>
        <div className="right-menu">
          <li>MENUS</li>
          <li>OUR STORY</li>
          <li>PRIVATE EVENTS</li>
          <li>CONTACT</li>
          <li>GIFT CARDS</li>
          <button className="btn-primary">RESERVATIONS</button>
        </div>
      </div>
    </div>
  );
};
