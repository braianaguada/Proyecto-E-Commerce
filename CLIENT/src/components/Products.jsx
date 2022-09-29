import React from "react";
import { Link } from "react-router-dom";
import styles from './Products.module.css'
import heart from '../media/heart.svg'
import sum from '../media/sum.svg'
import circle from '../media/circle.svg'
import circleinverted from '../media/circleinverted.svg'
import stars from '../media/stars.svg'

export default function Products({ id, title, image, price, description }) {
  return (
    <div className={styles.cards}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.info}>
      <Link className={styles.link} to={`/Details/${id}`}>
        <h1>{title}</h1>
      </Link>
      <h2>${price}</h2>
      <div className={styles.iconsContainer}>
      <img className={styles.heart} src={heart} alt="icon"/>
      <img className={styles.sum} src={sum} alt="icon"/>
      <img className={styles.circle} src={circle} alt="icon"/>
      <img className={styles.circleinverted} src={circleinverted} alt="icon"/>
      <img className={styles.stars} src={stars} alt="icon"/>
      </div>
      </div>
    </div>
  );
}
