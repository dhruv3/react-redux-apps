import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component{
  constructor(props){
    super(props);
  }
  renderList(data){
    return(
      <li key={data.recipe}>
        <div>{data.recipe}</div>
      </li>
    )
  }
  render(){
    return(
      <div className="row recipeListContainer">
        <ul className="recipeListUL">
          {this.props.data.map(this.renderList)}
        </ul>
      </div>
    )
  }
}

export default connect()(RecipeList);