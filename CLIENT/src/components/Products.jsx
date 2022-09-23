import React from "react";
import { Link } from "react-router-dom";
import styles from './Products.module.css'
import heart from '../media/heart.svg'

export default function Products({ id, title, image, price, description }) {
  return (
    <div className={styles.cards}>
      <img src={image} alt="product" />
      <div className={styles.info}>
      <Link className={styles.link} to={`/Details/${id}`}>
        <h1>{title}</h1>
      </Link>
      <h2>{price}</h2>
      <div className={styles.iconsContainer}>
      <img className={styles.heart} src={heart} alt="icon"/>
      </div>
      </div>
    </div>
  );
}
