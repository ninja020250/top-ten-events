import React, { Component } from "react";
const images = [
  require("../../static/box-9-rectangle-1.png"),
  require("../../static/box-9-rectangle-2.png")
];
export default class Box9 extends Component {
  render() {
    return (
      <div className="card box-circle box-9">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            {this.props.contentTitle}
          </h5>
          <div className="activities">
            <Activity
              number="35"
              title="universities"
              linearColor="orange-linear"
            />
            <Activity
              number="2,700"
              title="students visits"
              linearColor="pink-linear"
            />
            <Activity
              number="400"
              title="interns"
              linearColor="purple-linear"
            />
            <Activity number="6,100" title="CVs" linearColor="green-linear" />
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

class Activity extends Component {
  render() {
    return (
      <div className={`activity ${this.props.linearColor}`}>
        <span className="number">
          ${this.props.number} {this.props.title}
        </span>
      </div>
    );
  }
}
