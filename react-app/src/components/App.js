import React, { Component } from "react";

import Profile from "./Profile";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="w3-row w3-padding">
        <Profile />
        <Content />
      </div>
    );
  }
}

export default App;
