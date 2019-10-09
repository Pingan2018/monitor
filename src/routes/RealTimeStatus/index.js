import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { Radio, Input, Button, Table, Divider, Tag } from "antd";
const { Search } = Input;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

class RealTimeStatus extends Component {
  add1 = () => {
    this.props.add1();
  };
  render() {
    return (
      <div className="realTimeStatus">
        <div className="search">
          <Radio className="radioWrapper">最近故障时间</Radio>
          <Radio className="radioWrapper">报警时间</Radio>
          <Radio className="radioWrapper">最近在线时间</Radio>
          <Radio className="radioWrapper">故障持续时间</Radio>
          <Radio className="radioWrapper">报警事件来源</Radio>
          <Search
            style={{ width: "340px" }}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <div className="buttonWrapper">
            <Button type="primary">导出</Button>
          </div>
        </div>
        <div className="table">
          <Table
            columns={columns}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "realTimeStatus-table-row" : ""
            }
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}
export default RealTimeStatus;
