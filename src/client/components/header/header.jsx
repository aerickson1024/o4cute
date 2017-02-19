import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.leftSection}>
            <Link to="/">o4cute</Link>
          </div>
          <div className={styles.middleSection}>
            <Link to="products">Products</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="cart">View Cart</Link>
          </div>
          <div className={styles.rightSection}>
            <Link to="signup">Sign Up</Link>
            <Link to="signin">Sign In</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
