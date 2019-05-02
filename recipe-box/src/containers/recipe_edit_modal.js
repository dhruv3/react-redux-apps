import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {cancelRecipe} from '../actions/recipeCancel';
import {saveRecipe} from '../actions/recipeSave';

class RecipeEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.getNewRecipe = this.getNewRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      recipeName: "",
      recipeIngredients: [],
      recipeDirections: []
    }
  }

  getNewRecipe(){
    return{
      "recipe": this.state.recipeName,
      "ingredients": this.state.recipeIngredients,
      "directions": this.state.recipeDirections
    }
  }

  handleChange(e){
    if(e.target.name === "recipeName"){
      this.setState({[e.target.name]: e.target.value})
    }
    else{
      this.setState({[e.target.name]: e.target.value.split("\\")})
    }
  }

  render() {
    return (
      <div className="recipeModal dialog-wrap" style={{display: this.props.isVisible ? 'block': 'none'}}>
        <div className="dialog-header">{this.props.mode=="edit" ? 'Edit': 'Add'} Recipe</div>
        <div className="dialog-label">Recipe Name</div>
        <textarea name='recipeName' rows="1" onChange={(e) => this.handleChange(e)} placeholder="Recipe Name"></textarea>
        <div className="dialog-label">Ingredients</div>
        <textarea name='recipeIngredients' onChange={(e) => this.handleChange(e)} placeholder="Separate each ingredient with a &quot;\&quot;: Milk \ 2 Eggs \ 1/3 Cup Sugar"></textarea>
        <div className="dialog-label">Directions</div>
        <textarea name='recipeDirections' onChange={(e) => this.handleChange(e)} placeholder="Separate each step with a '\': 
        Preheat oven to 350°F \ 
        Combine ingredients in pie crust \ 
        Bake until crust is golden brown. \"></textarea>
        <br/>
        <button onClick={() => this.props.saveRecipe(this.getNewRecipe())}>Save</button>
        <button onClick={() => this.props.cancelRecipe()}>Cancel</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ cancelRecipe, saveRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeEditModal);