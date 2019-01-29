import React, { Component } from "react";

const images = [
  require("../../static/box-8-rectangle-1.png"),
  require("../../static/box-8-rectangle-2.png"),
  require("../../static/box-8-rectangle-3.png")
];
export default class Box8 extends Component {
  render() {
    return (
      <div className="card box-circle box-8">
        <div className="card-header">
          <span className="circle">{this.props.title}</span>
        </div>
        <div className={`card-body ${this.props.bgColor}`}>
          <div className="row content">
            <div className="col-4">
              <div className="content-child content-child-first">
                <span className="blue-text">New Technology Day</span>
                <br />
                with enterprise
                <br />
                solutions focus
              </div>
            </div>
            <div className="col-4 border-horizontal-yellow">
              <div className="content-child centering">
                38
                <br />
                products
              </div>
            </div>
            <div className="col-4">
              <div className="content-child centering">
                550
                <br />
                engineers joined
              </div>
            </div>
          </div>
          <div className="row content-2">
            <div className="col-4">
              <div className="image">
                <img src={images[0]} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="image">
                <img src={images[1]} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="image">
                <img src={images[2]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <div className="col-4">
            <div className="content-child"><span className="blue-text">New Technology Day</span><br/>
            with enterprise<br/>
             solutions focus 
             </div>
            <div className="col-4">
            <div className="content-child">
            </div>
            </div>
            <div className="col-4">
            <div className="content-child">
            </div>
            </div>
          </div> */
}
