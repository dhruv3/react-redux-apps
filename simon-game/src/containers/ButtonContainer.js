import React, { Component } from 'react';
import AudioButton from '../components/AudioButton.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {userPatternInput} from '../actions/userButtonPress';
import {updateScore} from '../actions/updateScore';
import {runState} from '../actions/updateRunState';

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
    this.boinkSound = this.boinkSound.bind(this);
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
    if(this.props.play === false){
      this.props.userPatternInput(elem.getAttribute('name'));
      this.props.runState(true);
      clearInterval(this.interval);
    }
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
  }

  shouldComponentUpdate(nextProps, nextState){
    debugger;
    if(nextProps.play === false && nextProps.run){
      //play audio button
      const score = nextProps.score;
      const idx = parseInt(nextProps.pattern[score]) - 1;
      this.buttonInfo[idx]["ref"].current.click();
      //6 second alarm to remind user for his input
      this.interval = setInterval(() => {
        this.boinkSound()
      }, 6000);
      this.props.runState(false);
    }
    else{
      //reset stuff
    }
    return true;
  }

  boinkSound(){
    this.buttonInfo[0]["ref"].current.play();
    this.buttonInfo[1]["ref"].current.play();
    this.buttonInfo[2]["ref"].current.play();
    this.buttonInfo[3]["ref"].current.play();
  }

  componentWillUpdate(nextProps, nextState){
    debugger;
    if(this.props.play === false){
      if(nextProps.userInput.length - this.props.userInput.length === 1){
        //compare user input with our string
        for(let i = 0; i < nextProps.userInput.length; i++){
          if(nextProps.userInput[i] != this.props.pattern[i]){
            //incorrect input
            this.boinkSound();
            return true;
          }
        }
        //update score and you'll go to next iteration
        this.props.updateScore(this.props.score+1);
      }
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ userPatternInput, updateScore, runState }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonContainer);