import React, { Component } from 'react';

import Profile from './Profile';
import Content from './Content';





class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Profile />
        <Content />

      </React.Fragment>

    );
  }
}

export default App;
