import React from "react";
import "./WishList.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export const WishList = ({ name, price, id, photos, onClick }) => {
=======
function WishList({ name, price, index, photos, onClick }) {
>>>>>>> f084858f814e3b215119c977483624481e7d1b2c
  return (
    <div className="wish-container">
      <Link to={`/products/${id}`}>
        <img className="wish-item-photo" src={photos} alt={name} />
      </Link>
<<<<<<< HEAD
      <div className="wish-item-name" >{name}</div>
      <div className="wish-item-price">${price}</div>
      <button className="button" type="submit" value={id} onClick={(e)=>onClick(e)}>Remove</button>
    </div >
=======

      <div className="wish-item-name">{name}</div>
      <div className="wish-item-price">${price}</div>
      <input
        className="button"
        type="submit"
        value="Remove"
        name={index}
        onClick={onClick}
      />
    </div>
>>>>>>> f084858f814e3b215119c977483624481e7d1b2c
  );
}
export default WishList;
