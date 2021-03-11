import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import ProductDetails from "../../screens/ProductDetails/ProductDetails"
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../services/products";


const Shop = () => {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const user = async () => {
      const product = await getUser(id);
      setCart([...product.wishlist]);
      console.log(cart)
      setIsLoaded(true);
    };
    user();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const removeFromCart = (product) => {
   let newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };
 
  const cartItems = cart.map((product) => (
    <div key={product._id}>
      {`${product.name}: $${product.price}`}
      <input type="submit" value="remove"  onClick={() => removeFromCart(product._id)} />
    </div>
  ));
  return (
    <Layout>
    <ProductDetails />
      <div>My WishList</div>
      <div>{cartItems}</div>
    </Layout>
  );
};
export default Shop;