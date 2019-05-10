import React, { Component } from 'react';
import AudioButton from '../components/AudioButton.js';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.buttonInfo = [{
      name: "red",
      id: "1",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
    },
    {
      name: "green",
      id: "2",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
    },
    {
      name: "yellow",
      id: "3",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
    },
    {
      name: "blue",
      id: "4",
      ref: React.createRef(),
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
    }];
    this.playAudio = this.playAudio.bind(this);
    this.playAudioParent = this.playAudioParent.bind(this);
    this.interval = 0;
  }

  //triggered when user clicks
  playAudioParent(e){
    const elem = e.target.children[0];
    elem.play();
    elem.parentElement.classList.add('hover-class');
    setTimeout(() => {
      elem.parentElement.classList.remove('hover-class');
    }, 500);
    //dispatch action to update user input
  }

  //triggered by app to follow random pattern
  playAudio(e){
    e.stopPropagation();
    const elem = e.target;
    elem.play();
    elem.parentElement.classList.add('hover-class');
    setTimeout(() => {
      elem.parentElement.classList.remove('hover-class');
    }, 500);
    clearInterval(this.interval);
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.play === false){
      //play audio button
      const score = nextProps.score;
      const idx = parseInt(nextProps.pattern[score]) - 1;
      this.buttonInfo[idx]["ref"].current.click();
      //6 second alarm to remind user for his input
      this.interval = setInterval(() => {
        this.buttonInfo[0]["ref"].current.play();
        this.buttonInfo[1]["ref"].current.play();
        this.buttonInfo[2]["ref"].current.play();
        this.buttonInfo[3]["ref"].current.play();
      }, 6000);
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
          <AudioButton clickCB={this.playAudio} clickParentCB={this.playAudioParent} info={this.buttonInfo[0]}/>
          <AudioButton clickCB={this.playAudio} clickParentCB={this.playAudioParent} info={this.buttonInfo[1]}/>
        </div>
        <div className="btnLvl">
          <AudioButton clickCB={this.playAudio} clickParentCB={this.playAudioParent} info={this.buttonInfo[2]}/>
          <AudioButton clickCB={this.playAudio} clickParentCB={this.playAudioParent} info={this.buttonInfo[3]}/>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
