import React from "react";
import "./banner4.scss";
import { FormattedMessage } from "react-intl";
import { Data1 } from "./data";

const Banner4 = () => {
  return (
    <div className="our-vision">
       <h1>
        <FormattedMessage id="our-statistics" defaultMessage="Our Statistics"/>
       </h1>
      <div className="items">
        {Data1.map((props) => {
          return (
            <div className="item">
              <div className="icon" data-aos="zoom-in-up">
                {props.icon}
              </div>
              <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {props.title}
              </h6>
              <p>{props.text}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};
export default Banner4;
