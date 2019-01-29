import React, { Component } from "react";

const icon1 = require("../../static/box-1-chart.png");
const icon2 = require("../../static/box-1-money.png");
const icon3 = require("../../static/box-1-flag.png");
export default class Box1 extends Component {
  render() {
    return (
      <div className="card box-circle box-1">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <div className="row">
            <div className="col-4">
              <Box1Element
                content1="Reached"
                content2="2.400"
                content3="people"
                isBold1=""
                isBold2="bold"
                isBold3=""
                icon={icon1}
                isborder=""
              />
            </div>
            <div className="col-4">
              <Box1Element
                content1="Business"
                content2="growth"
                content3="20%"
                isBold1=""
                isBold2=""
                isBold3="bold"
                icon={icon2}
                isborder="border-horizontal"
              />
            </div>
            <div className="col-4">
              <Box1Element
                content1="First Client"
                content2="from"
                content3="Italy"
                isBold1=""
                isBold2=""
                isBold3="bold"
                icon={icon3}
                isborder=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Box1Element extends Component {
  render() {
    return (
      <div className={`box-1-element ${this.props.isborder}`}>
        <div className="image">
          <img src={this.props.icon} alt="" />
        </div>
        <div className="content">
          <div className={`content-child content-1 ${this.props.isBold1}`}>
            {this.props.content1}
          </div>

          <div className={`content-child content-2 ${this.props.isBold2}`}>
            {this.props.content2}
          </div>

          <div className={`content-child content-3 ${this.props.isBold3}`}>
            {this.props.content3}
          </div>
        </div>
      </div>
    );
  }
}
