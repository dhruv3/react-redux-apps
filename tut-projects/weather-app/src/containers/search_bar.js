import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(){
    super();
    this.state = {term: ''}
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //Fetch weather data using API
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Get 5 day forecast of your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
