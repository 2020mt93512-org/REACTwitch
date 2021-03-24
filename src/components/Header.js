import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        REACTwitch
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
      Dev 1 Feature 1 Header Change
      <br />
      Dev 2 Feature 2 Header Change
    </div>
  );
};

export default Header;
