import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getWishlist, } from "../../services/users";
import {deleteWish} from "../../services/users"
import { Link, useParams } from "react-router-dom";


const Shop = (props) => {
  const [cart, setCart] = useState([]);
  const { id } = useParams()
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(id)

// console.log(props.user._id)
  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlist(id);
      console.log(wishlist)
      if (wishlist) {
        setCart([...wishlist]);
        console.log(cart)
        setIsLoaded(true);
      }

    };
    fetchWishlist();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleRemoveFromWishList = async (product) => {
console.log(product._id)
    const response = await deleteWish(id,product._id)
    console.log(response)


  };

  const cartItems = cart.map((product) => (
    <div key={product._id}>
      {`${product.name}: $${product.price}`}
      <input type="submit" value="remove" onClick={(product) => handleRemoveFromWishList(product)} />
    </div>
  ));
  return (
    <Layout user={props.user}>
      
      <div>My WishList</div>
      
      {props.user ?
        <div>{cartItems}</div>
        :
        <div>You did not log in!</div>}
   
      
    </Layout>
  );
};
export default Shop;