import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import async from './middlewares/async';

import routes from './routes.jsx';

import styles from './index.css';

const createStoreWithMiddleware = applyMiddleware(async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
, document.querySelector('.container'));
