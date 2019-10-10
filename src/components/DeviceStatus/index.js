import React, { Component } from "react";
import "./index.css";
class DeviceStatus extends Component {
  add1 = () => {
    this.props.add1();
  };
  render() {
    return (
      <div>
        <span className={this.props.myClassName}></span>
        <span className='deviceStatus-text'>{this.props.text}</span>
      </div>
    );
  }
}

export default DeviceStatus;
