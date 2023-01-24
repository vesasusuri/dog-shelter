import React from "react";
import { FormattedMessage } from "react-intl";
import "./ourServices.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";

const OurServices = () => {
  return (
    <div className="banner5">
      <div className="inner-banner-photo"></div>

      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner3-title"
            defaultMessage="Our Services"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner5-text"
            defaultMessage="1. Medical treatment for Disorders."
          />
        </p>
        <p>
          <FormattedMessage
            id="home-banner5-text2"
            defaultMessage="2. Broken bone treatment."
          />
        </p>
        <p>
          <FormattedMessage
            id="home-banner5-text3"
            defaultMessage="3. Treatment for heart-related diseases."
          />
        </p>
       
      </div>
    </div>
  );
};
export default OurServices;
