import React, { Component } from "react";

const image = require("../../static/box-5-rectangle-2.png");
export default class Box5 extends Component {
  render() {
    return (
      <div className="card box-circle box-5">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            {this.props.contentTitle}
          </h5>
          <div className="row content">
            <div className="content-text col-sm-12 col-md-12 col-lg-7 col-xl-7">
              Trained 50 Blockchain developers
              <br />
              for projects in Australia and Thailand
            </div>
            <div className="content-image col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
