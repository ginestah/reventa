import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getWishlist } from "../../services/users";
import { Link, useParams } from "react-router-dom";


const Shop = (props) => {
  const [cart, setCart] = useState([]);
  const { id } = useParams()
  console.log(id)

// console.log(props.user._id)
  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlist(id);
      console.log(wishlist)
      if (wishlist) {
        setCart([...wishlist]);
        console.log(cart)
        // setIsLoaded(true);
      }

    };
    fetchWishlist();
  }, [id]);

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  const removeFromCart = (product) => {
    let newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  const cartItems = cart.map((product) => (
    <div key={product._id}>
      {`${product.name}: $${product.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(product._id)} />
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