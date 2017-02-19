import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app/app.jsx';
import Products from './components/products/products.jsx';
import Welcome from './components/welcome/welcome.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path="products" component={Products}></Route>
  </Route>
);
