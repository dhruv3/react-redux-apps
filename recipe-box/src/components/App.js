import React, { Component } from 'react';
import RecipeListContainer from '../containers/recipe_list';
import RecipeDetailContainer from '../containers/recipe_detail';
import RecipeEditModalContainer from '../containers/recipe_edit_modal';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>Recipe Box</h1>
        </div>
        <RecipeListContainer data={this.props.data} selIndex={this.props.selIndex}/>
        <RecipeDetailContainer data={this.props.data} selIndex={this.props.selIndex}/>
        <RecipeEditModalContainer isVisible={this.props.isVisible} mode={this.props.mode}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { data: state.content.data, selIndex: state.content.selIndex, isVisible: state.content.isVisible, mode: state.content.mode };
}

export default connect(mapStateToProps)(App);
