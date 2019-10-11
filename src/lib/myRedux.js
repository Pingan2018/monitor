import React, { useReducer } from 'react'
const ReduxContext = React.createContext()
export function applyMiddleware(...middlewares){
  return function(createStore){
    return function(reducer,initialState){
      let {store,Provider,connect}=createStore(reducer,initialState)
      let dispatch
      const middlewareAPI = {
        getState:()=>store.getState(),
        dispatch:(...args)=>dispatch(...args)
      }
      let chain = middlewares.map(middleware=>middleware(middlewareAPI))
      dispatch = compose(...chain)((...args)=>store.dispatch(...args))
      store.dispatch =dispatch
      return {
        store,connect,Provider   
      }
    }
  }
}
export function createStore(reducer,initialState){
  let store = {}
  const Provider = props =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    store.getState = ()=>state
    store.dispatch= dispatch
    return(
      <ReduxContext.Provider value={store}>
        {React.cloneElement(props.children)}
      </ReduxContext.Provider>
    )
  }
  function connect(mapStateToProps,mapDispatchToProps){
    return function(Component){
      let state = initialState
      let actions= {}
      return props=>{
        if(store.getState) {
          state = mapStateToProps(store.getState())
        }
        actions = mapDispatchToProps(store.dispatch)
        return <Component {...state} {...actions} {...props} dispatch={store.dispatch}/>
      }
    }
  }
  return{store,Provider,connect}
}




let logger = store =>next => action=>{
  console.log('%c prev state',`color:#a3a3a3,font-weight:bold`,store.getState())
  console.log('%c action',`color:#a3a3a3,font-weight:bold`,action)
  next(action)
  console.log('%c next state',`color:#a3a3a3,font-weight:bold`,store.getState())
}
let promise = store =>next => action=>{
  if(action.then && typeof action.then ==='function'){
    return action.then(store.dispatch)
  }
  next(action)
}
let thunk = store =>next => action=>{
  if(typeof action === 'function'){
    return action(store.dispatch,store.getState)
  }
  next(action)
}

function compose(...fns){
  if(fns.length ===0){
    return args=>args
  }
  if(fns.length===1){
    return fns[0]
  }
  return fns.reduce((a,b)=>(...args)=>a(b(...args)))
}