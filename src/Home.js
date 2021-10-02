import React from 'react'

export class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'home'
    }
  }
  render() {
    const name = this.state.name
    return (
      <div>这个组件是{name}</div>
    )
  }
}