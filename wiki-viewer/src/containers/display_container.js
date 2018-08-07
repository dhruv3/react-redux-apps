import React, {Component} from 'react';
import {connect} from 'react-redux';

class DisplayContainer extends Component{
  constructor(props) {
    super(props);
  }
  renderList(data){
    return(
      <a href={`https://en.wikipedia.org/?curid=${data.pageid}`} target="_blank">
        <li key={data.pageid}>
          <h1>{data.title}</h1>
          <p>{data.extract}</p>
        </li>
      </a>
    )
  }
  render(){
    return(
      <ul className="resultContainer container">
        {this.props.wiki.map(this.renderList)}
      </ul>
    )
  }
}

function mapStateToProps({wiki}){
  return{ wiki };
}

export default connect(mapStateToProps)(DisplayContainer);
