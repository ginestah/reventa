import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getWishlist, deleteWish } from "../../services/users";
import { useParams, Redirect } from "react-router-dom";
import { WishList } from "../../components/WishList/WishList";
import "./WishLists.css";

const WishLists = (props) => {
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlist(id);
      if (wishlist) {
        setCart([...wishlist]);
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
    await deleteWish(id, e.target.name);
    setIsDeleted(!isDeleted);
  };

  const cartItems = cart.map((product) => (
    <WishList
      key={product._id}
      name={product.name}
      photos={product.photos[0]}
      price={product.price}
      onClick={(e) => handleRemoveFromWishList(e)}
      index={product._id}
      id={product._id}
    />
  ));

  return (
    <Layout user={props.user}>
      <h3>My Wish List</h3>
      {cart.length !== 0 ? (
        <div className="wish-list">{cartItems}</div>
      ) : (
        <h3>My Wish List is Empty</h3>
      )}
    </Layout>
  );
};
export default WishLists;
