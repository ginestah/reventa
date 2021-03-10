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
        <div className="product-details">
          <img
            className="product-detail-image"
            src={product.photos[0].imgURL}
          />
          <button className="edit-button">
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
          </button>
          <button className="delete-button" onClick={() => handleClick()}>
            Delete
          </button>
        </div>
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
