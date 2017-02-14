import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app/app.jsx';
import Products from './components/products/products.jsx';

export default (
  <Route path="/" component={App}>
    <Route path="products" component={Products}></Route>
  </Route>
);
