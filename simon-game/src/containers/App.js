import React, { Component } from 'react';
import Controller from '../components/Controller.js';
import ButtonContainer from './ButtonContainer.js';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Controller play={this.props.play} strict={this.props.strict}/>
        <ButtonContainer run={this.props.run} play={this.props.play} score={this.props.score} pattern={this.props.pattern} userInput={this.props.userInput}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { run: state.content.run, play: state.content.play, strict: state.content.strict, score: state.content.score, pattern: state.content.pattern, userInput: state.content.userInput};
}

export default connect(mapStateToProps)(App);

