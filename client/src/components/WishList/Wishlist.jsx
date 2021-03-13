import React from "react";


export const Wishlist = ({ name, price, index, photos, onClick }) => {
  return (
    <>
    <div className="wish-item-name">{name}</div>
    <div className="wish-item-price">{price}</div>
   <img src={photos}/>
      <input type="submit" value="remove" name={index} onClick={onClick} />
      </>
  )
}

