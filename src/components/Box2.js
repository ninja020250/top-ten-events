import React, { Component } from "react";

const image = require("../../static/box-2-maps.png");
export default class Box2 extends Component {
  render() {
    return (
      <div className="card box-circle box-2">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">{this.props.contentTitle}</h5>
          <div className="row content">
            <div className="content-text col-4">
              Expand <br /> ASEAN <br /> market
            </div>
            <div className="content-image col-8">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
