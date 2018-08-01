# Redux Notes

## Section 3

### Number 36
Redux is a state container which means it is a collection of all the data that describes our app.

USP of Redux: We have a single object referred as STATE that contains entire data.

Redux contains the data that tells the application WHAT it should render.

### Number 37
Tinder Model with bucket of data and view.

![Tinder UML Diagram](https://user-images.githubusercontent.com/13077629/43487892-faddd8bc-94e5-11e8-9089-cd0b0445c5bb.png)

## Section 4

### Number 39
Reducer is just a function that returns a piece of application state. Our application can have many pieces of state so our we can have multiple reducers.

**Book Application UML**
<img width="787" alt="book app uml" src="https://user-images.githubusercontent.com/13077629/43488380-8bd8b71e-94e7-11e8-8094-6e25be7d397b.png">

**Reducers and the parts they are handling** 
<img width="1196" alt="reducer mapping to a piece of app state" src="https://user-images.githubusercontent.com/13077629/43488350-74c4296e-94e7-11e8-9f6b-a181ffa47c4f.png">

Creating a reducer is a two step process:
1. You create the function that defines the reducer.
2. You wire the reducer to the application.

### Number 41
A container is just a component that has direct access to state produced by Redux.

![How to select a container](https://user-images.githubusercontent.com/13077629/43488930-44f3c2c4-94e9-11e8-9172-1b6c0be68ab6.png)

Which component should we select as a container?

We should select the most parent component that cares about a particular state to be a container. So only we **ONLY** create containers out of components that care about a particular piece of state. 

### Number 42
`mapStateToProps` function: It takes in `state` as an argument then it returns an object and that object is set equal to `this.props`. So we can see that Containers are being are link between React and Redux.

Two important notes:
1. If our application state  changes(like user clicks something which causes list of books to be updated) then our BookList component will re-render.
2. `this.props` being set set equal to object returned by `mapStateToProps` function.

### Number 44
Lifecycle of action method:

![Lifecycle of action method](https://user-images.githubusercontent.com/13077629/43527996-f1215e08-9575-11e8-8465-2c912523de95.png)

### Number 45
Actions are just an object that flows through different reducers. Reducers then use it to work on different piece of state.

We need to make action creator is wired up to redux.
```javascript
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be 
  //passed to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
```
This will help in ensuring that whatever action happens it flows through all the reducers. Dispatch will takes the action and will flow it through all the reducers. 

Anything returned from this function will end up as this.props on the BookList container. So `this.props.selectBook` will call the function `selectBook`.

### Number 47
State passed to the reducer is NOT the application state, only the state this reducer is responsible for.

### Number 49
Our application state is assembled entirely by all of our reducers. So redux sends a booting up action through all the reducers.
