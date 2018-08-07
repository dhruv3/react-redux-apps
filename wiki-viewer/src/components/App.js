import React, { Component } from 'react';
import SearchContainer from '../containers/search_container';
import DisplayContainer from '../containers/display_container';

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
