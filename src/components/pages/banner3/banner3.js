import React from "react";
import { FormattedMessage } from "react-intl";
import "./banner3.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Banner3 = () => {
  return (
    <div className="banner3">
     
      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner3-title"
            defaultMessage="Requirements for guests:"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner3-text"
            defaultMessage="1. Basic Requirements to Meet your Guest Needs."
          />
        </p>
        <p>
          <FormattedMessage
            id="home-banner3-text2"
            defaultMessage="2. Pets that are very useful to humans, but these pets can not have.."
          />
        </p>
        <div className="links">
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="view-more"
                defaultMessage="View More"
              />
            }
          />
          
        </div>
      </div>
      <div className="inner-banner-photo"></div>

    </div>
  );
};
export default Banner3;
