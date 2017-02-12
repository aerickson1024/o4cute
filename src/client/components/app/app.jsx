import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Header from '../header/header.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
