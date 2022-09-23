import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocals } from "../redux/actions";
import Products from "../components/Products";
import NavBar from "./NavBar";
import Slider from "./Slider";
import styles from './Home.module.css'

export default function Locals() {
  const dispatch = useDispatch();
  const allLocals = useSelector((state) => state.locals);

  console.log(allLocals);
  useEffect(() => {
    dispatch(fetchLocals());
  }, [dispatch]);

  return (
    <div className={styles.Home}>
      <NavBar/>
      <Slider/>
      <div className={styles.Container}>
        {" "}
        {allLocals?.map((products) => {
          return (  
              <Products
                id={products.id}
                title={products.title}
                price={products.price}
                image={products.image}
                description={products.description}
              />
          );
        })}
      </div>
    </div>
  );
}
