import React, { Component } from "react";
const tmaLogo = require("../../static/tma-logo.png");
const eventLogo = require("../../static/event-logo.png");
const unniversaryLogo = require("../../static/unniversary-logo.png");

export default class Header extends Component {
  render() {
    return (
      <div className="row top-ten-header">
        <div className="tma-logo  ">
          <img src={tmaLogo} alt="" />
        </div>
        <div className="top-ten-logo ">
          <img src={eventLogo} alt="" />
        </div>
        <div className="anniversary-logo ">
          <img src={unniversaryLogo} alt="" />
        </div>
      </div>
    );
  }
}
