import React, { useReducer, useContext } from 'react'
const ReduxContext = React.createContext()
export function createStore(reducer, initialState) {

  const Provider = props => {
    let store = {}
    const [state, dispatch] = useReducer(reducer, initialState)
    store.state = state
    store.dispatch = dispatch
    return (
      <ReduxContext.Provider value={store}>
        {React.cloneElement(props.children)}
      </ReduxContext.Provider>
    )
  }
  function connect(Component) {
    return props => {
      const { state, dispatch } = useContext(ReduxContext)
      return <Component {...state} dispatch={dispatch} />
    }

  }
  return { Provider, connect }
}

