import React from "react";
import { FormattedMessage } from "react-intl";
import "./banner2.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="inner-banner-photo"></div>

      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner2-title"
            defaultMessage="How to take care of your pets"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="Pets need care and attention to keep them healthy, happy and safe. They need healthy food; clean, fresh water; an comfortable place to sleep. Most pets..."
          />
        </p>
        <div className="links">
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="About-Us"
                defaultMessage="About Us"
              />
            }
          />
          
        </div>
      </div>

    </div>
  );
};
export default Banner2;
