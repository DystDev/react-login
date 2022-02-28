import React from "react";
import ReactDOM from "react-dom";
import Mogus from "./Info.js";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "alexjb22",
      password: "amogos",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    console.log(e);
    if (
      document.getElementById("username").value === this.state.username &&
      document.getElementById("password").value === this.state.password
    ) {
      this.setState({ authorized: true });
    }
  }
  render() {
    const button = (
      <form action="#" onSubmit={this.authorize}>
        <input type={"text"} id={"username"} placeholder={"username"}></input>
        <input
          type={"password"}
          id={"password"}
          placeholder={"password"}
        ></input>
        <input type="submit"></input>
      </form>
    );
    return (
      <div>
        <h1>State is: {this.state.authorized ? "YES" : "NO LLLLLLLLLL"}</h1>
        {this.state.authorized ? <Mogus /> : button}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
