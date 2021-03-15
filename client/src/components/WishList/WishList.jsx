import React from "react";
import "./WishList.css";
import { Link } from "react-router-dom";

const WishList = ({ name, price, id, photos, onClick }) => {
  return (
    <div className="wish-container">
      <Link to={`/products/${id}`}>
        <img className="wish-item-photo" src={photos} alt={name} />
      </Link>
      <div className="wish-item-name" >{name}</div>
      <div className="wish-item-price">${price}</div>
      <button className="button" type="submit" value={id} onClick={(e)=>onClick(e)}>Remove</button>
    </div >
  );
}
export default WishList;
