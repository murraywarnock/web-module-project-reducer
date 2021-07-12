# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick is passed via props to CalcButton component
* [But props in CalcButton reasigns onClick to an empty function: (onClick = ()=>{}) - don't understand why"]
* addOneHandler in App component is called anyway by onClick, which uses dispatch from useReducer to call
addOne from actions/index.js.
* actions/index.js addOne returns an object: {type:ADD_ONE}
* A little murky on this step, but through useReducer, dispatch uses the action object (above) to call reducer function in reducers/index.js.
* The switch statement executes the case from the action object {type: ADD_ONE}, which spreads the state and recalculates the total property, then returns the new updated state.
* The updated state.total is taken as a prop by component TotalDisplay.
...
* TotalDisplay *DOES NOT* show the total plus 1. It shows the new state.total. "Total plus 1" already occurred in the reducers/index.js

* TotalDisplay shows the total plus 1.
