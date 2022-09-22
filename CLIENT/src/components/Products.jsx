import React from "react";
import { Link } from "react-router-dom";

export default function Products({ id, title, image, price }) {
  return (
    <div>
      <Link to={`/Details/${id}`}>
        <p>{title}</p>
      </Link>
      <img src={image} alt="product" />
      <h2>{price}</h2>
    </div>
  );
}
