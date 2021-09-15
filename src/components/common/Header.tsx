import React from "react";
import "./../../assets/sass/style.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-navi";

export const Header = () => {
  return (
    <div>
      <div className="header-secondary">
        <span>1906 14TH STREET NW, WASHINGTON, DC 20009 (202) 518-7926</span>
      </div>
      <div className="header-primary">
        <div>
          <img src={logo} />
        </div>
        <div className="right-menu">
          <Link href="/menus">MENUS</Link>
          <Link href="/">OUR STORY</Link>
          <Link href="/events">PRIVATE EVENTS</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/gifts">GIFT CARDS</Link>
          <button className="btn-primary">RESERVATIONS</button>
        </div>
      </div>
    </div>
  );
};
