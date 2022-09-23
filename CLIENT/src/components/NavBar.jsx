import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.cart}>
      </div>
      <ul>
        <li>cart</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  )
}
