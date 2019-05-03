import React from 'react';

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

  componentWillReceiveProps(nextProps){
    if(nextProps.mode === "edit"){
      this.state = {
        recipeName: nextProps.data["recipe"],
        recipeIngredients: nextProps.data["ingredients"],
        recipeDirections: nextProps.data["directions"]
      }
    }
    else{
      this.state = {
        recipeName: "",
        recipeIngredients: [],
        recipeDirections: []
      }
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
        <textarea name='recipeName' value={this.state.recipeName} rows="1" onChange={(e) => this.handleChange(e)} placeholder="Recipe Name"></textarea>
        <div className="dialog-label">Ingredients</div>
        <textarea name='recipeIngredients' value={this.state.recipeIngredients} onChange={(e) => this.handleChange(e)} placeholder="Separate each ingredient with a &quot;\&quot;: Milk \ 2 Eggs \ 1/3 Cup Sugar"></textarea>
        <div className="dialog-label">Directions</div>
        <textarea name='recipeDirections' value={this.state.recipeDirections} onChange={(e) => this.handleChange(e)} placeholder="Separate each step with a '\': 
        Preheat oven to 350°F \ 
        Combine ingredients in pie crust \ 
        Bake until crust is golden brown. \"></textarea>
        <br/>
        <button onClick={() => this.props.saveRecipe(this.getNewRecipe(), this.props.mode, this.props.selIndex)}>Save</button>
        <button onClick={() => this.props.cancelRecipe()}>Cancel</button>
      </div>
    );
  }
}

export default RecipeEditModal;