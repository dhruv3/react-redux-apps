import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row recipeListContainer">
        <ul>

        </ul>
      </div>
    )
  }
}

export default connect()(RecipeList);