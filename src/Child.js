import React, { Component } from "react";
import PropTypes from "prop-types";
export class Child extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  state = {
    sex: 1,
  };
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };
  static defaultProps = {
    name: "我是默认的儿子",
  }
  componentDidMount() {
    console.log(this)
  }

  render() {
    const { name, age } = this.props;
    return (
      <div className="child">
        我是儿子，我的名字是{name}
        <div onClick={this.changeSex}>我的年龄是{age}</div>
        <div>我的性别是{this.state.sex}</div>
      </div>
    );
  }
}
