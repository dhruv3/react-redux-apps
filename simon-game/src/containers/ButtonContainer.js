import React, { Component } from 'react';
import AudioButton from '../components/AudioButton.js';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.buttonInfo = [{
      name: "red",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
    },
    {
      name: "green",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
    },
    {
      name: "yellow",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
    },
    {
      name: "blue",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
    }]
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.play === false){
      //play audio button
      const score = nextProps.score;
      const idx = parseInt(nextProps.pattern[score]) - 1;
      this.buttonInfo[idx]["ref"].current.play();
      //wait for inp
      let userInp = nextProps.userInp;
      this.interval = setInterval(() => {
        //if no inp => wrong buzzer
      }, 1000);
      //else compare inp with string
      clearInterval(this.interval);
    }
    else{
      //reset stuff
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
