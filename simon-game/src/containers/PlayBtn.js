import React, { Component } from 'react';

class PlayBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickCallBack}>
          <div>{this.props.name}</div>
        </button>
      </div>
    )
  }
}

export default PlayBtn;
