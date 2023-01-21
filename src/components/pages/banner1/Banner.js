import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/banner.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner-title"
            defaultMessage="Keep a dog for the safety of your home"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="Pets are our passion and safety is our promise. At Purina, our dog and cat food & treats are made for your pet's unique needs and preferences to get them..."
          />
        </p>
        <div className="links">
          <Link className="button">
            <FormattedMessage id="Buy-Now" defaultMessage="Buy Now" />
          </Link>
          <Link className="button2">
            <BsTelephoneFill className="iconPhone"/>
            <FormattedMessage id="contact" defaultMessage="Contact Us" />
          </Link>
        </div>
      </div>

      <div className="inner-banner-photo"></div>
    </div>
  );
};
export default Banner;
