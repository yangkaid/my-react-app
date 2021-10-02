import React from "react";

export class About extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '我是about组件'
    }
  }
  render() {
    const name = this.state.name
    return (
      <div>
        <div>{name}</div>
      </div>
    )
  }
}