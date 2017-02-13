import React, {Component} from 'react';

import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li>Products</li>
            <li>Contact</li>
            <li>o4cute</li>
            <li>Cart</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
