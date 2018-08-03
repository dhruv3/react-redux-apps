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
