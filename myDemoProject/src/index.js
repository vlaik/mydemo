import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import combineReducers from './redux/redusers/combineReducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'



const store = createStore(combineReducers,applyMiddleware(thunk))

store.subscribe(() =>{
  console.log(store.getState())
})

console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
    
  ,
  document.getElementById('root')
);

