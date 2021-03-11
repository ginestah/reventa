import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";
import { getUser } from "../../services/products";

import "./ProductDetails.css"

function ProductDetails(props) {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wish, setWish] = useState([])
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const { username } = useParams();
  console.log(username, id)
  const handleClick = () => {
    deleteProduct(id);
    setIsDeleted(true);
  };

  
  if(props.user){
    console.log(props.user._id)
  } else {
  return null;
  }
  
  
  useEffect(() => {
    const decorate = async () => {
      const product = await getProduct(id);
      // const user = await getUser(username);
      // console.log(user)
      setProduct(product);
      setIsLoaded(true);

    };
    decorate();
  }, [id]);

  // console.log(product.userId)
  // useEffect(() => {
  //   const users = async () => {
  //     const user = await getUser(username);
  //     console.log(user)
  //     if (user.wishlist.length > 0) {
  //       setWish([...wish, user.wishlist]);
  //       setIsLoaded(true);
  //     } else {
  //       setWish([...wish])
  //     }

  //   };
  //   users();
  // }, [username]);


  // function setToken(userToken) {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }
  // console.log(setToken)

  // function getToken() {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // }

  // function App() {
  //   const token = getToken();

  //   if(!token) {
  //     return <Login setToken={setToken} />
  //   }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  // const addToWishList = () => {
  //   setWish([...wish,product])
  //   // if (props.cart) {
  //   //  props.cart.forEach(eachproduct => {
  //   //   if (eachproduct._id !== product._id) {
  //   //     props.setCart([...props.cart, product]);

  //   //   } 
  //   // }); 
  //   // } else {
  //   //       props.setCart([...props.cart, product]);

  //   // }

  // };
  return (
    <Layout user={props.user}>
      {!isDeleted ? (
        <main className="product-details">
          <p>{product.name}</p>
          <img
            alt={product.name}
            className="product-detail-image"
            src={product.photos ? product.photos[0] : null}
          />
          <p>${product.price}</p>
          {props.user ? (
            product.shipping ? (
              <p>Seller offers shipping please contact to arrange details</p>
            ) : (
              <p>
                Seller does not offer shipping on this product, please contact
                to arrange pickup
              </p>
            )
          ) : null}

          {props.user ? (
            <p>Contact Info: {product.contactInfo}</p>
          ) : (
            <p>You must login to see sellers contact info</p>
          )}
          <details open>{product.description}</details>
          {/* <input type="submit" value="Add to Wish List" onClick={props.user && props.user.wishlist.push(product)} /> */}

          <details closed>{product.description}</details>
          <button className="edit-button">
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
          </button>
          <button className="delete-button" onClick={() => handleClick()}>
            Delete
          </button>
        </main>
      ) : (
        <div>
          <h2>Your post has been deleted!</h2>
          <button className="take-me-home">
            <Link to="/">Take me home</Link>
          </button>
        </div>
      )}
    </Layout>
  );
}

export default ProductDetails;
