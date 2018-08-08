import React, { Component } from 'react';
import RecipeListContainer from '../containers/recipe_list';
import RecipeDetailContainer from '../containers/recipe_detail';
import RecipeEditModalContainer from '../containers/recipe_edit_modal';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>Recipe Box</h1>
        </div>
        <RecipeListContainer/>
        <RecipeDetailContainer/>
        <RecipeEditModalContainer/>
      </div>
    );
  }
}

export default App;
