import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li><Link to="products">Products</Link></li>
            <li>Contact</li>
            <li><Link to="/">o4cute</Link></li>
            <li>Cart</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
