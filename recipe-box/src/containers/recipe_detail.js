import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteRecipe} from '../actions/recipeDeleted';
import {editRecipe} from '../actions/recipeEdited';
import {addRecipe} from '../actions/recipeAdded';

class RecipeDetail extends Component{
  constructor(props){
    super(props);
    this.createBox = this.createBox.bind(this);
  }
  
  createBox(elems){
    let arr = [];
    arr.push(elems.map(
        (elem, index) => {
            return (<li key={index}>
              <div>{elem}</div>
            </li>)
        }
      ))
    return arr;
  }

  
  render(){
    return(
      <div className="row recipeDetailContainer">
        <div className="recipeDetailHeader">
          <div className="title"></div>
          <div className="title-row">
            <div className="recipeHeading">{this.props.data[this.props.selIndex]["recipe"]}</div>
            <button id="delete-recipe" title="Delete Recipe" value="" onClick={() => this.props.deleteRecipe()}><i className="fa fa-trash"></i></button>
            <button id="edit-recipe" title="Edit Recipe" value="" onClick={() => this.props.editRecipe()}><i className="fas fa-edit"></i></button>
          </div>
        </div>
        <div className="recipeBox">
          <div className="ingredientBox">
            <div className="ingredientHeading">Ingredients:</div>
            <ul className="ingredientList">
              {this.createBox(this.props.data[this.props.selIndex]["ingredients"])}
            </ul>
          </div>
          <div className="directionBox">
            <div className="directionHeading">Directions:</div>
            <ol type="1" className="directionList">
              {this.createBox(this.props.data[this.props.selIndex]["directions"])}
            </ol>
          </div>
        </div>
        <div className="addButton">
          <button id="add-recipe" title="Add Recipe" onClick={() => this.props.addRecipe()}><i className="far fa-plus-square"></i></button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteRecipe, editRecipe, addRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeDetail);