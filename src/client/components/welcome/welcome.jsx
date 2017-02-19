import React, {Component} from 'react';

import styles from './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.center}>Welcome to o4cute!</div>
          <div className={styles.center}>Please sign up and create an account.</div>
        </div>
      </div>
    );
  }
}

export default Welcome;