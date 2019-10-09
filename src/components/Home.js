import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { add1 } from '../redux/actions';

class Home extends Component {
  add1 = () => {
    this.props.add1();
  };
  render() {
    return (
      <>
        <Button type="primary" onClick={this.add1}>
          点击加1
        </Button>
        <p>{this.props.home}</p>
      </>
    );
  }
}

export default connect(
  state => ({ home: state.home }),
  { add1 }
)(Home);
