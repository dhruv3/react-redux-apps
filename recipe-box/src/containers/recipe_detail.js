import React, { Component } from 'react';

export default class RecipeDetail extends Component{
  render(){
    return(
      <div className="row recipeDetailContainer">
        <div className="recipeDetailHeader">
          <div className="title"></div>
          <div className="title-row">
            <button id="delete-" title="Delete Recipe" value=""><i className="fa fa-trash"></i></button>
            <button id="edit-" title="Edit Recipe" value=""><i className="fas fa-edit"></i></button>
          </div>
        </div>
        <div className="recipeBox">
        </div>
        <div className="addButton">
          <button id="add-recipe" title="Add Recipe"><i className="far fa-plus-square"></i></button>
        </div>
      </div>
    )
  }
}