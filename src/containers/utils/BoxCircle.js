import React, { Component } from "react";

export default class BoxCircle extends Component {
  render() {
    return (
      <div className="card box-circle" >
        <div className="card-header">
        <span className="circle">{this.props.title}</span>
        </div>
        <div className="card-body" />
      </div>
    );
  }
}
