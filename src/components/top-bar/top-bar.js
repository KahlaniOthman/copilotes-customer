import React from "react";
import { navigate } from "@reach/router";

import Button from "@material-ui/core/Button";

import "./style.css";
const TopBar = ({
  userInfo,
  handleRedirection,
  location,
  redirectToWelcomePage,
}) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <b className="item" onClick={redirectToWelcomePage}>
          TO DO LIST APP
        </b>
        <b className="item" onClick={() => navigate("/demo")}>
          DEMO
        </b>
        {userInfo && (
          <b className="item" onClick={() => navigate("/todo")}>
            MANAGE YOUR TO DO LIST
          </b>
        )}
      </div>
      {location.pathname !== "/login" && (
        <div className="top-bar-right">
          <Button
            onClick={handleRedirection}
            variant="contained"
            color="secondary"
          >
            {userInfo ? "Logout" : "Login"}
          </Button>
        </div>
      )}
    </div>
  );
};
export default TopBar;
