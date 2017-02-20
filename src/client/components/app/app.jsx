import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Header from '../header/header';

class App extends Component {
  render() {
    return (
      <main>
        <Header></Header>
        {this.props.children}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
