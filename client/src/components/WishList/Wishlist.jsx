import React from "react";
import './Wishlist.css'
import { Link } from "react-router-dom"

export const Wishlist = ({ name, price, index, photos, onClick }) => {
  return (
    
    <div className="wish-container">
      <Link to={`/products/${index}`}>
        <img className="wish-item-photo" src={photos} alt={name} />
        
      

      
        <div className="wish-item-name">{name}</div>
        <div className="wish-item-price">${price}</div>
        <input className="button" type="submit" value="Remove" name={index} onClick={onClick} />
      
      </Link>
      </div >
      
      
  );
};
