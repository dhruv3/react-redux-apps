import React, { Component } from 'react';
import RecipeListContainer from '../containers/recipe_list';
import RecipeDetailContainer from '../containers/recipe_detail';
import RecipeEditModalContainer from '../containers/recipe_edit_modal';

class App extends Component {

  render() {
    return (
      <div className="container">
        <RecipeListContainer/>
        <RecipeDetailContainer/>
        <RecipeEditModalContainer/>
      </div>
    );
  }
}

export default App;
