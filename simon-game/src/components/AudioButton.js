import React, { Component } from 'react';

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.playAudio = this.playAudio.bind(this)
  }
  // playAudio(e){
  //   e.target.children[0].play();
  //   //dispatch action here
  // }
  render() {
    let className = `audioDiv ${this.props.info.name}`;
    return (
      <div className={className} onClick={this.props.clickParentCB}>
        <audio name={this.props.info.id} onClick={this.props.clickCB} className="clip" ref={this.props.info.ref} src={this.props.info.audio}></audio>
      </div>
    );
  }
}

export default AudioButton;
