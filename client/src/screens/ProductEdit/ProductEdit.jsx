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
      <div className="product-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
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
          <label htmlFor="price">Price of Product</label>

          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <label htmlFor="location">Location:</label>
          <input
            className="input-price"
            placeholder="Price"
            value={product.location}
            name="location"
            required
            onChange={handleChange}
          />
          <label htmlFor="imgURL">Photos of Product</label>
          {product.photos.length - 1 > 4 ? null : (
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

          <label htmlFor="contactInfo">Your Contact Info:</label>

          <input
            className="input-contact-info"
            placeholder="contact-info"
            value={product.contactInfo}
            name="contactInfo"
            required
            onChange={handleChange}
          />

          <label htmlFor="shipping"> offer of Shipping</label>

          <select name="shipping" id="shipping">
            <option value="Yes">Yes</option>
            <option value="Pickup">Pick-up</option>
          </select>

          <label htmlFor="description">Description of Product</label>
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

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <div className="preview-images">{imageJSX}</div>
      </div>
    </Layout>
  );
};

export default ProductEdit;
