import rootReducer from "./RootReducer";
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = 
process.env.REACT_APP_DEV === "1" ?
createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
: 
createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)