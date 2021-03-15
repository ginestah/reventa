import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getWishlist } from "../../services/users";
import { deleteWish } from "../../services/users";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Wishlist } from "../../components/WishList/Wishlist";
import "./WishList.css"

const Shop = (props) => {
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlist(id);
      console.log(wishlist);
      if (wishlist) {
        setCart([...wishlist]);
        console.log(cart);
        setIsLoaded(true);
      }
      if (isDeleted) {

        return <Redirect to={`/wishlist/${id}`} />;

      }
    };
    fetchWishlist();
  }, [id, isDeleted]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }



  const handleRemoveFromWishList = async (e) => {
    const response = await deleteWish(id, e.target.name);
    setIsDeleted(!isDeleted);
  };

  const cartItems = cart.map((product) => (
    <Wishlist
      key={product._id}
      name={product.name}
      photos={product.photos[0]}
      price={product.price}
      onClick={(e) => handleRemoveFromWishList(e)}
      index={product._id}
    />
  ));
  return (
    <Layout user={props.user}>

      <div>My WishList</div>
      {
        cart.length !== 0 ? <div>{cartItems}</div> : <div>empty list</div>
      }






    </Layout>
  );
};
export default Shop;
