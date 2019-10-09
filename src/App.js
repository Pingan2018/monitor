import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyHeader from "./components//Header";
import RealTimeStatus from "./routes/RealTimeStatus";
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <MyHeader></MyHeader>
        <Content className="content">
          <Switch>
            <Route exact path="/" component={RealTimeStatus} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
