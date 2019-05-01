import React from 'react';
import { connect } from 'react-redux';

class RecipeEditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipeModal dialog-wrap">
        <div className="dialog-header">Recipe</div>
        <div className="dialog-label">Edit Recipe</div>
        <textarea rows="1" placeholder="Recipe Name"></textarea>
        <div className="dialog-label">Ingredients</div>
        <textarea placeholder="Separate each ingredient with a &quot;\&quot;: Milk \ 2 Eggs \ 1/3 Cup Sugar"></textarea>
        <div className="dialog-label">Directions</div>
        <textarea placeholder="Separate each step with a '\': 
        Preheat oven to 350°F \ 
        Combine ingredients in pie crust \ 
        Bake until crust is golden brown. \"></textarea>
        <br/>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default connect()(RecipeEditModal);