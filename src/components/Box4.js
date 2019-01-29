import React, { Component } from "react";

const banner1 = require("../../static/box-4-banner-1.png");
const banner2 = require("../../static/box-4-banner-2.png");
export default class Box4 extends Component {
  render() {
    return (
      <div className="card box-circle box-4">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <div className="row content">
            <div className="col-5 black-header card-title-1">Established</div>
            <div className="col-7">
              <div className="banner-1">
                <img src={banner1} alt="" />
              </div>
            </div>
          </div>
          <div className="row content content-2">
            <div className="col-7 card-title-2">Automotive clients<br/>from Germany,
            <br/>Japan, USA</div>
            <div className="col-5">
              <div className="banner-1">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
