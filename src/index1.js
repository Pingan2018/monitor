import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from './kvx'
// import {Provider,connect} from 'react-redux'
import createSagaMiddleware from "redux-saga";
import { fork, all,put, takeEvery } from "redux-saga/effects";


function* fetchADD10() {
  yield put({ type: 'add_success' });
}

function* watchFetchADD10() {
  yield takeEvery('add', fetchADD10);
}

function* rootSaga() {
  yield all([fork(watchFetchADD10)]);
}
const counterReducer = function (state = 10, action) {
  switch (action.type) {
    case 'add':
      return state + 10
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counterReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);



class ReduxTest extends React.Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div>
        {store.getState()}
        <div>
          <button onClick={()=>store.dispatch({type:'add'})}>+</button>
        </div>
      </div>
    )
  }
}
// const ReduxTestED = connect(
//   state=>({num:state}),
//   {
//     add:()=>({type:'add'})
//   }
// )(ReduxTest)
// ReactDOM.render(
//   <Provider store={store}><ReduxTestED/></Provider>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <ReduxTest/>,
  document.getElementById("root")
);

