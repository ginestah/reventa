import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";
import "./ProductDetails.css";
import DetailSlider from "../../components/DetailSlider/DetailSlider";

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
          <h3>{product.name}</h3>
          <div className="details2">
            <DetailSlider photos={product.photos} />
            <div className="details3">
              <div className="details4">
                <p>Price: ${product.price}</p>
                {props.user ? (
                  product.shipping ? (
                    <p>
                      Seller offers shipping, please contact to arrange details
                    </p>
                  ) : (
                    <p>
                      Seller does not offer shipping on this product, please
                      contact to arrange pickup
                    </p>
                  )
                ) : null}

                {props.user ? (
                  <p>Contact Info: {product.contactInfo}</p>
                ) : (
                  <p>You must login to see sellers contact info</p>
                )}
                <details closed="true">{product.description}</details>
              </div>

              <div className="details-buttons">
                {props.user ? (
                  props.user._id === product.userId ? (
                    <>
                      {" "}
                      <button className="edit-button">
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleClick()}
                      >
                        Delete
                      </button>
                    </>
                  ) : null
                ) : null}
              </div>
            </div>
          </div>
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
