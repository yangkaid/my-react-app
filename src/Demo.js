import React, { Component } from "react";
import { Child } from "./Child";

export class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "yangkai",
      list: ["yangkai", "zhangsan", "lisi", "王五"],
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
    console.log(this);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  myChild = React.createRef();
  showRef = () => {
    const { current } = this.myChild;
    console.log(current);
  };
  render() {
    const age = 200;
    return (
      <div>
        <div>{this.state.name}</div>
        <div onClick={this.showRef} ref={this.myChild}>
          我的年岭是{age}
        </div>
        <div>现在的时间是{this.state.date.toLocaleTimeString()}</div>
        <ul>
          {this.state.list.map((item) => {
            return <li key={item.toString()}>我的名字叫{item}</li>;
          })}
        </ul>
        <Child name="hahah" age={100} />
      </div>
    );
  }
}
