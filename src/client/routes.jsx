import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app/app.jsx';

export default (
  <Route path="/">
    <IndexRoute component={App}></IndexRoute>
  </Route>
);
