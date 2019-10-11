export function createStore(reducer,enhancer){

  if(enhancer){
    return enhancer(createStore)(reducer)
  }

  let currenState = undefined
  const currenListeners = []
  function getState(){
    return currenState
  }
  function dispatch(action){
    currenState = reducer(currenState,action)
    currenListeners.forEach(v=>v())
    return action
  }
  function subscribe(cb){
    currenListeners.push(cb)
  }
  dispatch({type:'@efgfdsfghgfdfdfgfn'})
  return{
    getState,dispatch,subscribe
  }
}

export function applyMiddleware(...middlewares){
  return createStore => (...args)=>{
    const store = createStore(...args)
    let dispatch = store.dispatch
    const midApi={
      getState:store.getState,
      dispatch:(...args)=>dispatch(...args)
    }
    const chain = middlewares.map(mw=>mw(midApi))
    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
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