import React, { Component } from 'react';
import AudioButton from '../components/AudioButton.js';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.buttonInfo = [{
      name: "red",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
    },
    {
      name: "green",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
    },
    {
      name: "yellow",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
    },
    {
      name: "blue",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
    }]
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.play === false){
      //play audio button
      //wait for inp
      //if no inp => wrong buzzer
      //else compare inp with string
    }
  }

  render() {
    return (
      <div className="btnContainer">
        <h1 className="level">{this.props.score}</h1>
        <div className="btnLvl">
          <AudioButton info={this.buttonInfo[0]}/>
          <AudioButton info={this.buttonInfo[1]}/>
        </div>
        <div className="btnLvl">
          <AudioButton info={this.buttonInfo[2]}/>
          <AudioButton info={this.buttonInfo[3]}/>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
