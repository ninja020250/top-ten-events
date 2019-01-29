import React, { Component } from "react";

const image = require("../../static/box-6-rectangle.png");
export default class Box6 extends Component {
  render() {
    return (
      <div className="card box-circle box-6">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <h5 className="card-title header white-header">
            {this.props.contentTitle}
          </h5>
          <div className="row content">
            <div className="content-image">
              <img src={image} alt="" />
            </div>
            <div className="content-text">
              Double number of projects
              <br />
              applying DevOps
            </div>
          </div>
        </div>
      </div>
    );
  }
}
