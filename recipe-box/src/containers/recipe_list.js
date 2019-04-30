import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSelectedRecipe} from '../actions/recipeSelected';

class RecipeList extends Component{
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  //cb in map function takes 3 args: data, index and complete array over which we are mapping 
  renderList(data, index){
    //setting up onClick function
    //https://stackoverflow.com/questions/44833583/expected-onclick-listener-to-be-a-function-instead-got-type-object-react-redu/44833743
    return(
      <li key={data.recipe} onClick={() => this.props.updateSelectedRecipe(index)}>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateSelectedRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeList);