import React, {Component} from 'react';

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
    
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Search Wikipedia..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
        <button className="btn btn-secondary">Clear</button>
        <button className="btn btn-primary">Random!</button>
    </form>
    )
  }
}

export default SearchContainer;
