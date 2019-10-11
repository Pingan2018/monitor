import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { Row, Col } from "antd";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import echarts from "echarts";

const option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    right: 10,
    top: 30,
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      center: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    }
  ]
};

const option1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    orient: "vertical",
    right: 5,
    top: 60,
    itemGap: 5,
    itemWidth: 6,
    itemHeight: 6,
    textStyle: {
      color: "#fff",
      fontSize: 10
    },
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  grid: {
    left: "1%",
    bottom: "3%",
    width: "75%",
    height: "80%",
    containLabel: true
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "red",
        fontSize: "10"
      }
    }
  },
  xAxis: {
    type: "category",
    data: ["12日", "13日", "14日", "15日"],
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "red",
        fontSize: "10"
      }
    }
  },
  series: [
    {
      name: "直接访问",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [320, 302, 301, 334]
    },
    {
      name: "邮件营销",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [120, 132, 101, 134]
    },
    {
      name: "联盟广告",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [220, 182, 191, 234]
    },
    {
      name: "视频广告",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [150, 212, 201, 154]
    },
    {
      name: "搜索引擎",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      barWidth: 20,
      data: [820, 832, 901, 934]
    }
  ]
};

const option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    // orient: "vertical",
    // right: 5,
    top: 20,
    itemGap: 5,
    itemWidth: 6,
    itemHeight: 6,
    textStyle: {
      color: "#fff",
      fontSize: 10
    },
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  grid: {
    left: "3%",
    bottom: "5%",
    width: "90%",
    height: "80%",
    containLabel: true
  },
  xAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "red",
        fontSize: "10"
      }
    }
  },
  yAxis: {
    type: "category",
    data: ["北京", "上海", "广州", "深圳"],
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "red",
        fontSize: "10"
      }
    }
  },
  series: [
    {
      name: "直接访问",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [320, 302, 301, 334]
    },
    {
      name: "邮件营销",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [120, 132, 101, 134]
    },
    {
      name: "联盟广告",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [220, 182, 191, 234]
    },
    {
      name: "视频广告",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      data: [150, 212, 201, 154]
    },
    {
      name: "搜索引擎",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "inside",
          fontSize: 8
        }
      },
      barWidth: 30,
      data: [820, 832, 901, 934]
    }
  ]
};

const option3 = {
  // legend: {
  //     data:['最高气温','最低气温']
  // },
  grid: {
    left: "5%",
    bottom: "5%",
    width: "90%",
    height: "80%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  yAxis: [
    {
      type: "value",
      scale: true,
      name: "价格",
      nameLocation:'middle',
      nameTextStyle:{
        color:'#F3A000',
        fontSize:12,
        padding:10,
      },
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    },
    {
      type: "value",
      scale: true,
      name: "预购量",
      nameLocation:'middle',
      nameTextStyle:{
        color:'#F3A000',
        fontSize:12,
        padding:30,
      },
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }
  ],
  series: [
    {
      name: "最高气温",
      type: "line",
      data: [11, 11, 15, 13, 12, 13, 10],
    },
    {
      name: "最低气温",
      type: "line",
      data: [1, -2, 2, 5, 3, 2, 0]
    }
  ]
};
class MonitorPlatform extends Component {
  componentDidMount() {
    document.querySelector('.content').style.backgroundColor = '#1C3259'
    const myChart1 = echarts.init(document.getElementById("map1"));
    myChart1.setOption(option);
    const myChart2 = echarts.init(document.getElementById("map2"));
    myChart2.setOption(option);
    const myChart3 = echarts.init(document.getElementById("map3"));
    myChart3.setOption(option1);
    const myChart4 = echarts.init(document.getElementById("map4"));
    myChart4.setOption(option2);
    const myChart5 = echarts.init(document.getElementById("map5"));
    myChart5.setOption(option3);
  }
  componentWillUnmount(){
    document.querySelector('.content').style.backgroundColor = '#fff'
  }
  render() {
    return (
      <div className="monitorPlatform">
        <Row gutter={16} className="firstRow">
          <Col className="gutter-row" span={6}>
            <Row>
              <div className="gutter-box monitorPlatform-report-title">
                监控设备
              </div>
            </Row>
            <Row>
              <div
                className="gutter-box monitorPlatform-report-left"
                id="map1"
              ></div>
            </Row>
            <Row>
              <div className="gutter-box monitorPlatform-report-title">
                VIP监控设备
              </div>
            </Row>
            <Row>
              <div
                className="gutter-box monitorPlatform-report-left"
                id="map2"
              ></div>
            </Row>
          </Col>
          <Col className="gutter-row" span={10}>
            <div className="gutter-box monitorPlatform-map">col-10</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <Row>
              <div className="gutter-box monitorPlatform-report-title-right">
                分城市报警分布
              </div>
            </Row>
            <Row>
              <div
                className="gutter-box monitorPlatform-report-right"
                id="map4"
              ></div>
            </Row>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Row>
              <div className="gutter-box monitorPlatform-report-title-bottom-left">
                屏端故障部门分布
              </div>
            </Row>
            <Row>
              <div
                className="gutter-box monitorPlatform-report-bottom-left"
                id="map3"
              ></div>
            </Row>
          </Col>
          <Col className="gutter-row" span={18}>
            <Row>
              <div className="gutter-box monitorPlatform-report-title-bottom-right">
                八周稳定推送数据
              </div>
            </Row>
            <Row>
              <div
                className="gutter-box monitorPlatform-report-bottom-right"
                id="map5"
              ></div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default MonitorPlatform;
