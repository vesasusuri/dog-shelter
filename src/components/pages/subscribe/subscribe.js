import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import "./subscribe.scss";
import { FormattedMessage } from "react-intl";

const Subscribe = () => {
  const [email2, setEmail2] = useState("");

  return (
    <div className="subscribe">
      <div className="text">
        <h1>
          <FormattedMessage
            id="SubscribeNewsletter"
            defaultMessage="Subscribe Newsletter & get Pet.care News"
          />
        </h1>
        <br></br>
        <div className="email-container">
          <span>
            <BiEnvelope />
          </span>
          <input
            type="email"
            id="email2"
            name="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            placeholder="Enter email address..."
          />
          <button>
            <FormattedMessage id="subscribe" defaultMessage="Subscribe" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
