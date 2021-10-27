import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import isDev from './utils/isDev';

const initialState = {};

const middleware = [thunk];


const Middleware = (isDev()) 
                    ? composeWithDevTools(applyMiddleware(...middleware)) 
                    : applyMiddleware(...middleware);

const store = createStore(
  rootReducer,
  initialState,
  Middleware
);

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();

  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }

});

export default store;