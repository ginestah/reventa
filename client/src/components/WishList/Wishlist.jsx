import React from "react";
import './Wishlist.css'

export const Wishlist = ({ name, price, index, photos, onClick }) => {
  return (
    <div className="wish-container">
      <div className="wish-item-name">{name}</div>
      <div className="wish-item-price">${price}</div>
      <img className="wish-item-photo" src={photos} alt={name} />
      <input className="button" type="submit" value="Remove" name={index} onClick={onClick} />
    </div>
  );
};
