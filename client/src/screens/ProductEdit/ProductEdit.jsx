import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  const [imageAdd, setImageAdd] = useState([""]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    photos: [],
    price: "",
    shipping: "",
    contactInfo: "",
    location: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };
  const deleteImage = (e) => {
    product.photos.splice(e.target.value, 1);
    setProduct({ ...product });
  };
  const imageJSX = product.photos.map((photo, index) => (
    <div className="photo-container" key={index}>
      {photo ? (
        <>
          <img className="preview-image" src={photo} alt={`product ${index}`} />
          <button value={index} onClick={deleteImage} type="button">
            Delete
          </button>
        </>
      ) : null}
    </div>
  ));

  if (isUpdated) {
    return <Redirect to={`/products`} />;
  }

  const handleImage = (event) => {
    setProduct({
      ...product,
      photos: [...product.photos, imageAdd],
    });
    setImageAdd("");
  };
  const urlCheck = new RegExp(
    /\b(https?:\/\/\S+(?:png|jpe?g|gif|photo)\S*)\b/gim
  );
  const checkImage = () => {
    if (urlCheck.test(imageAdd)) {
      return (
        <button className="photo-button" type="button" onClick={handleImage}>
          Add Image
        </button>
      );
    } else {
      return (
        <p className="taken-message">
          Please enter a valid image URL if you would like to add a photo
        </p>
      );
    }
  };

  return (
    <Layout user={props.user}>
      <div className="edit-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="details-container">
            <div>
              <label htmlFor="name">Name of Product</label>
              <input
                className="input-name"
                placeholder="Name"
                value={product.name}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="price">Price:</label>
              <input
                className="input-price"
                placeholder="Price"
                value={product.price}
                name="price"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="location">Location:</label>
              <input
                className="input-price"
                placeholder="Price"
                value={product.location}
                name="location"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="shipping">Shipping</label>
              <select name="shipping" id="shipping">
                <option value="selected">Please select one</option>
                <option value="true">
                  Available, not included in listing price
                </option>
                <option value="false">Pick-up only</option>
              </select>
            </div>

            <div>
              <label htmlFor="contactInfo">Your Contact Info:</label>
              <input
                className="input-contact-info"
                placeholder="Phone number or email address"
                value={product.contactInfo}
                name="contactInfo"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description">Product Description:</label>
              <textarea
                className="textarea-description"
                rows={10}
                cols={78}
                placeholder="Description"
                value={product.description}
                name="description"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-photos">
              <label htmlFor="imgURL">Photos:</label>
              <div>
                {product.photos.length > 4 ? null : (
                  <>
                    <input
                      type="url"
                      name="photos"
                      id="images"
                      value={imageAdd}
                      onChange={(e) => setImageAdd(e.target.value)}
                    />
                    {checkImage()}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="preview-images">{imageJSX}</div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
