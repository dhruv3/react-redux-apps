# Weather App

## Lec 52
Mockup of our app:
<img width="1051" alt="mockup" src="https://user-images.githubusercontent.com/13077629/43615681-d46228bc-9686-11e8-91bd-a28ef5ae5c35.png">

## Lec 53
[Video Description](https://www.youtube.com/watch?v=BvtQMxekmH0)

Controlled Component: It has `onChange` event handler on it which change component state and also sets the value.

Uncontrolled Component: Use `refs` to access dom input elements and then access refs to make changes.

## Lec 54
Whenever user focus is in input element and he/she presses ENTER or clicks SUBMIT then form element(due to its HTML behavior) will get submitted. We don't want frequent refresh happening. So we handle onSubmit event and then preventDefault() inside of it.

## Redux Middleware
## Lec 56
Middleware are sort of **gatekeepers** that check the incoming actions and then can do variety of stuff them before sending them to reducers.

New block diagram with middleware included:
<img width="1203" alt="middleware included" src="https://user-images.githubusercontent.com/13077629/43680941-4392b678-9814-11e8-9893-4a17bf86037b.png">


redux-promise package installed to handle AJAX request we'll be making to Weather API. Hook it up in our application as shown below:
```javascript
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
```

## Lec 57: Creating an action creator to call API
Install `axios` to make AJAX request from browser.
```javascript
import axios from 'axios';

const request = axios(url);
```
Need to call action creators? Connect them using mapDispatchToProps(which in turn uses bindActionCreators).

## Lec 59: Redux-Promise
redux-promise is a middleware that resolves the promise and unwraps the promise for use. It knows that reducers don't care about the promise but care about the data. So it processes the object returned by actio creators and then deliver it to the reducer.
<img width="486" alt="redux-promis" src="https://user-images.githubusercontent.com/13077629/43689918-48757e1c-98cf-11e8-8890-94fa34eb4904.png">
So now we get code that looks like a synchronous code.

## Lec 62
Current Redux State:
<img width="577" alt="screen shot 2018-08-05 at 5 34 25 pm" src="https://user-images.githubusercontent.com/13077629/43690291-ece97966-98d5-11e8-8027-5c603eff0f39.png">
