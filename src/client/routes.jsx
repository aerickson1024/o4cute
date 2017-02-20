import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app/app';
import Products from './components/products/products';
import Signin from './components/signin/signin';
import Welcome from './components/welcome/welcome';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path="products" component={Products}></Route>
    <Route path="signin" component={Signin}></Route>
  </Route>
);
