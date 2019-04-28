import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <button id="delete-" title="Delete Recipe" value=""><i className="fa fa-trash"></i></button>
            <button id="edit-" title="Edit Recipe" value=""><i className="fas fa-edit"></i></button>
          </div>
        </div>
        <div className="recipeBox">
          <div className="ingredientBox">
            <div>Ingredients:</div>
            <ul>
              {this.createBox(this.props.data[this.props.selIndex]["ingredients"])}
            </ul>
          </div>
          <div className="directionBox">
            <div>Directions:</div>
            <ul>
              {this.createBox(this.props.data[this.props.selIndex]["directions"])}
            </ul>
          </div>
        </div>
        <div className="addButton">
          <button id="add-recipe" title="Add Recipe"><i className="far fa-plus-square"></i></button>
        </div>
      </div>
    )
  }
}

export default connect()(RecipeDetail);