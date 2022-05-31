import { Link } from "react-router-dom";
import { PLAY } from "navigation/routes";
import React from "react";
import { Header, SelectImage, SelectLevel } from "components";

import "./index.css";

const Welcome = () => {
  return (
    <div className="welcome_main">
      <Header />
      Welcome Page <Link to={PLAY}>/Play</Link>
      <SelectLevel />
      <SelectImage />
      <div></div>
    </div>
  );
};

export default Welcome;
