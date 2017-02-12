import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className={styles.header}>Header position</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
