import React, { Component } from "react";
const banner = require("../../static/footer-banner.png");
export default class Footer extends Component {
  render() {
    return (
      <div className="top-ten-footer">
        <img src={banner} alt="banner" />
      </div>
    );
  }
}
