import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { add10 } from '../redux/actions';

class About extends Component {
  add10 = () => {
    this.props.add10();
  };
  render() {
    return (
      <>
        <Button type="danger" onClick={this.add10}>
          点击加10
        </Button>
        <p>{this.props.about}</p>
      </>
    );
  }
}

export default connect(
  state => ({ about: state.about }),
  { add10 }
)(About);
