import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocals } from "../store/actions";
import Products from "../components/Products"

export default function Locals() {
  const dispatch = useDispatch();
  const allLocals = useSelector((state) => state.locals);

  console.log(allLocals);
  useEffect(() => {
    dispatch(fetchLocals());
  }, [dispatch]);

  return (
  <div> {allLocals?.map((products) => {
    return (
      <Link className="linkStyle" to={"/home/" + products.id}>
        <Products
          id = {products.id}
          title = {products.title}
          price = {products.price}
          image = {products.image}
          description = {products.description}
        />
      </Link>
    );
  }
  )}</div>)
}
