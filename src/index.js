import React from 'react'
import ReactDOM from 'react-dom'
import Redux from 'redux'
import { Component } from 'react'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Main from "./components/Main"

import Actions from "./actions/ActionTypes";
// import sagas from './saga'
import rootReducer from './reducer'

// const sagaMiddleware = createSagaMiddleware();
// let middleware = [sagaMiddleware];

const store = createStore(
  rootReducer
);
// sagaMiddleware.run(sagas);


ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>
,
  document.getElementById('root')
);

// store.dispatch({type: Actions.INITIALIZE_DATA});

