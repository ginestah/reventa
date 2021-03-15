import React from "react";
import './WishList.css'
import { Link } from "react-router-dom"

export const WishList = ({ name, price, index, photos, onClick }) => {
  return (
    <div className="wish-container">
      <Link to={`/products/${index}`}>
        <img className="wish-item-photo" src={photos} alt={name} />
      </Link>

      <div className="wish-item-name" >{name}</div>
      <div className="wish-item-price">${price}</div>
      <button className="button" type="submit" value={name} name={index} onClick={onClick}>Remove</button>

    </div >
  );
};
