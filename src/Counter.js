import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { add, plus } from "./saga/actions";

class Counter extends Component {
  render() {
    return (
      <>
        <Button type="primary">{this.props.counter}</Button>
        <Button type="danger">{this.props.num}</Button>
      </>
    );
  }
}

export default connect(
  state => ({ counter: state.counter, num: state.num }),
  { add, plus }
)(Counter);
