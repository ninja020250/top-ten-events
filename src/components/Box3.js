import React, { Component } from "react";

const cranes = require("../../static/box-3-cranes.png");
const images = [
  require("../../static/box-3-rectangle-1.png"),
  require("../../static/box-3-rectangle-2.png"),
  require("../../static/box-3-rectangle-3.png")
];
export default class Box3 extends Component {
  render() {
    return (
      <div className="card box-circle">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            {this.props.contentTitle}
          </h5>
          <div className="icon-cranes">
            <img src={cranes} alt="" />
          </div>
          <div className="content">
            <div className="content-child">Started construction</div>
            <div className="content-child bold">TMA Innovation Park</div>
            <div className="content-child">in Quy Nhon</div>
          </div>
          <div className="image-list">
            <div className="image-list-child">
              <img src={images[0]} alt="" />
            </div>
            <div className="image-list-child">
              <img src={images[1]} alt="" />
            </div>
            <div className="image-list-child">
              <img src={images[2]} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
