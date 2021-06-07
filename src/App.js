import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/';
import { addOne, applyNumber } from './actions/';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('currentState: ', state);

  // const addOneHandler = ()=>{
  //   dispatch(addOne());
  // }
  
  const handleNumber = e => {
    console.log("Number: ", e.target.textContent);
    dispatch(applyNumber(e.target.textContent));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={addOneHandler}/> */}
              <CalcButton value={1} onClick={handleNumber}/>
              <CalcButton value={2} onClick={handleNumber}/>
              <CalcButton value={3} onClick={handleNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumber}/>
              <CalcButton value={5} onClick={handleNumber}/>
              <CalcButton value={6} onClick={handleNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumber}/>
              <CalcButton value={8} onClick={handleNumber}/>
              <CalcButton value={9} onClick={handleNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
