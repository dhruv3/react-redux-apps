import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePlayState} from '../actions/playStopUpdated';

class PlayBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.updatePlayState(this.props.play)}>
          <div>{this.props.play === true ? "Play" : "Stop"}</div>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updatePlayState }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayBtn);