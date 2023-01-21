import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import "./navbar.scss";

import MobileNav from "../MobileNav/MobileNav";

const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")}
    >
      <div className="left-side">
        <Link to="/" className="nav-logo">
          <div className="logo-container"></div>
        </Link>
      </div>

      <div className="nav-links">
        <div className="nav-link home-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="home" defaultMessage="Home" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link about-us-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="services" defaultMessage="Services" />
          </Link>
          <div className="line"></div>
         
        </div>

        <div className="nav-link furniture-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="furniture" defaultMessage="Animal" />
          </Link>
          <div className="line"></div>
        </div>
    
        <div className="nav-link contact-us">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="contact-us" defaultMessage="Contact Us" />
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="nav-auth">
        <Link to="/" className="contact-us">
          <FormattedMessage id="signup" defaultMessage="Sign Up" />
        </Link>
      </div>

      <MobileNav />
    </div>
  );
};

export default Navbar;
