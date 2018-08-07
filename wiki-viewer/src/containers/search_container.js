import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWiki} from '../actions/index';
import {clearDisplay} from '../actions/clear_display';

class SearchContainer extends Component{
  constructor() {
    super();
    this.state = {
      term: ''
    };
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWiki(this.state.term);
    this.setState({term: ''});
  }
  openRandomArticle(){
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  }
  clearDisplay(){
    this.props.clearDisplay()
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit.bind(this)} className="container searchFprm">
        <div className="row margin-bottom-20 margin-top-20">
          <input
            placeholder="Search Wikipedia..."
            className="col-sm-10"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}/>
          <span className="col-sm-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </div>
        <div className="row btnContainer margin-bottom-20">
          <button type="button" className="btn btn-secondary margin-right-20" onClick={this.clearDisplay.bind(this)}>Clear</button>
          <button type="button" className="btn btn-primary" onClick={this.openRandomArticle}>Random Article!</button>
        </div>
    </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWiki, clearDisplay }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchContainer);
