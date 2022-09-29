import React from 'react';
import styles from './NavBar.module.css';
import cart from '../media/cart.svg'

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <img className={styles.cart} src={cart} alt="icon"/>
      <ul>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  )
}
