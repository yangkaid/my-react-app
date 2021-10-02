import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Demo } from "./Demo";
import { Home } from "./Home";
import { About } from "./About";
import './Demo2.css'
export class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Dome2",
      age: "12123",
      score: 1231231,
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <div>这个组件的名字是{name}</div>
        <Link to='/demo'>Demo</Link> <br />
        <NavLink to='/about' activeClassName="active">我是NavLink About</NavLink>
        <Switch>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
