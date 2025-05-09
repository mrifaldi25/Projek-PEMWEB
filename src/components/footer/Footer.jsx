import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "./../../assets/bg.jpg";
import logo from "./../../assets/Logo_2.png";

import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="Logo_2.png">
            <img src={logo} alt="Logo_2.png" />
          </div>
        <div className="footer_content_credit">
            <Link to={`/${Config.HOME_PAGE}`}>@MovieVerse2025</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Contact us</Link>
            <Link to={`/${Config.HOME_PAGE}`}>About us</Link>
          </div>
          <div className="footer__content__menu">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
