import React, { Component } from 'react';
import SearchContainer from '../containers/search_container';
import DisplayComponent from '../containers/display_component';

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <DisplayComponent />
      </div>
    );
  }
}

export default App;
