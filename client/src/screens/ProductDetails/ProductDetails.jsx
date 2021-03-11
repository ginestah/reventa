import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";

function ProductDetails(props) {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    deleteProduct(id);
    setIsDeleted(true);
  };

  useEffect(() => {
    const decorate = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setIsLoaded(true);
    };
    decorate();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
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
