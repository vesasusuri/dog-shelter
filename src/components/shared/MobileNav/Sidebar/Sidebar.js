import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { CgClose } from "react-icons/cg";
import { BiSliderAlt, BiSupport, BiChair } from "react-icons/bi";
import { RiInformationFill, } from "react-icons/ri";
import { FaDog} from "react-icons/fa";


const Sidebar = (props) => {
  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link">
            <Link to="/" className="nav-anchor">
              <BiSliderAlt />
              <FormattedMessage id="services" defaultMessage="Home" />
            </Link>
          </div>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <RiInformationFill />
            <FormattedMessage id="Services" defaultMessage="Services" />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <FaDog />
            <FormattedMessage id="Animal" defaultMessage="Animal" />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <BiSupport />
            <FormattedMessage id="contact-us" defaultMessage="Contact Us" />
          </Link>
        </div>
      </div>

      <div className="sidebar-auth">
        <Link to="/" className="contact-us">
          <FormattedMessage id="login" defaultMessage="Log In" />
        </Link>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
