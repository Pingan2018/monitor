import React from "react";
import ReactDOM from "react-dom";
import { createStore } from './redux-hooks'

const initialState = { num: 10 }
const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'add':
      return { num: state.num + 10 }
    default:
      return state
  }
}

const { Provider, connect,_store } = createStore(counterReducer, initialState)
console.log(_store,'/')


function ReduxTest(props) {
  console.log(props,'props')
  return (
    <div>
      {props.num}
      <div>
        <button onClick={() => props.dispatch({ type: 'add' })}>+</button>
      </div>
    </div>
  )
}
const ReduxTestED = connect(ReduxTest)

function ReduxTest1(props) {
  function click1(){
    props.dispatch({ type: 'add' })
  }
  function click2(){
    props.dispatch({ type: 'add' })
  }
  return (
    <div>
      {props.num}
      <div>
        <button onClick={click1}>+</button>
        <button onClick={click2}>thunk</button>
      </div>
    </div>
  )
}
const ReduxTestED1 = connect(ReduxTest1)
ReactDOM.render(
  <Provider><div><ReduxTestED /><ReduxTestED1/></div></Provider>,
  document.getElementById("root")
);

