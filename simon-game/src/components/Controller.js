import React, { Component } from 'react';
import ToggleBtn from '../containers/ToggleBtn.js';
import PlayBtn from '../containers/PlayBtn.js';

class Controller extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controller">
        <PlayBtn name={this.props.play}/>
        <ToggleBtn name="Strict Mode" mode={this.props.strict}/>
      </div>
    );
  }
}

export default Controller;
