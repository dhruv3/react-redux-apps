import React from 'react';
import RecipeEditModalContainer from '../containers/recipe_edit_modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cancelRecipe} from '../actions/recipeCancel';
import {saveRecipe} from '../actions/recipeSave';

class RecipeModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    // this.getNewRecipe = this.getNewRecipe.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      recipeName: "",
      recipeIngredients: [],
      recipeDirections: []
    }
  }

  render() {
      let data = {};
      if(this.props.mode === "edit"){
        data = this.props.data[this.props.selIndex];
        return (
            <RecipeEditModalContainer data={data} isVisible={this.props.isVisible} mode={this.props.mode} cancelRecipe={this.props.cancelRecipe} saveRecipe={this.props.saveRecipe}/>
        );
      }
      else{
        return (
            <RecipeEditModalContainer data={data} isVisible={this.props.isVisible} mode={this.props.mode} cancelRecipe={this.props.cancelRecipe} saveRecipe={this.props.saveRecipe}/>
        );
      }    
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ cancelRecipe, saveRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeModalWrapper);