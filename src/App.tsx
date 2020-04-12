import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import './App.css';
import Thimbles from './components/Thimbles';
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Thimbles />
      </div>
    </Provider>
  )
}

export default App;
