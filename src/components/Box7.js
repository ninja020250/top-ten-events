import React, { Component } from "react";

const image = require("../../static/box-6-rectangle.png");
export default class Box7 extends Component {
  render() {
    return (
      <div className="card box-circle box-7">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            {this.props.contentTitle}
          </h5>
          <div className="row content">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <DG title="DG1" linearColor="orange-linear" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <DG title="DG2" linearColor="pink-linear" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <DG title="DG3" linearColor="purple-linear" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <DG title="DG4" linearColor="green-linear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DG extends Component {
  render() {
    return (
      <div className={`DG ${this.props.linearColor}`}>{this.props.title}</div>
    );
  }
}
