import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'
import { Layout, Menu } from "antd";
const { Header } = Layout;
class MyHeader extends Component {
  add1 = () => {
    this.props.add1();
  };
  render() {
    return (
      <Header className='header'>
        <div className="logo">分众设备监控平台</div>
        <div className="time">系统时间：2019-9-19 16:53</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "80px", widht: 300 }}
        >
          
          <Menu.Item key="1"><Link to="/">实时状态</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/home">监控报表</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/about">管理员设置</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MyHeader;
