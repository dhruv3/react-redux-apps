import React, { Component } from 'react';
import ToggleBtn from '../containers/ToggleBtn.js';
import PlayBtn from '../containers/PlayBtn.js';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBtnLabel: "Play",
    };
    this.playBtnClick = this.playBtnClick.bind(this);
    this.toggleBtnClick = this.toggleBtnClick.bind(this);
  }

  playBtnClick(){
    if(this.state.mainBtnLabel === "Play"){
      this.props.playPressed();
    }
  }

  toggleBtnClick(){
  }

  render() {
    return (
      <div className="controller">
        <PlayBtn name={this.state.mainBtnLabel} onClickCallBack={this.playBtnClick}/>
        <ToggleBtn name="Strict Mode" onClickCallBack={this.toggleBtnClick}/>
      </div>
    );
  }
}

export default Controller;
