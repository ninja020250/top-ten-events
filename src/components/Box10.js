import React, { Component } from "react";
const images = [
  require("../../static/box-10-rectangle-1.png"),
  require("../../static/box-10-rectangle-2.png")
];
export default class Box10 extends Component {
  render() {
    return (
      <div className="card box-circle box-10">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            1,000+ staff joined
            <br /> 15 sport &<br /> music activities
          </h5>
          <div className="row content">
            <div className="box-10-content-title">TMA Futsal League</div>
            <br />
            <ul className="box-10-content-list">
              <li>16 teams</li>
              <li>128 matches</li>
              <li>5 month</li>
              <li>604 goals</li>
            </ul>
          </div>
          <div className="image-list">
            <div className="image-list-child">
              <img src={images[0]} alt="" />
            </div>
            <div className="image-list-child">
              <img src={images[1]} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
