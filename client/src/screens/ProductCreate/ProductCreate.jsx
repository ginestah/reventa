import React from "react";
import "./ProductCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";
import { useState } from "react";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to="/products" />;
  }

  const handleClick = event => {
    
  }

  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          className="input-name"
          placeholder="Name"
          value={product.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Product Photos:</label>
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add More Images</button>
        <label>Product Description:</label>
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <label>Price: </label>
        <input
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <label>Shipping:</label>
        <select
          className="input-shipping"
          value={product.shipping}
          name="shipping"
          required
          onChange={handleChange}
        >
          <option value="true">Available, not included in item price</option>
          <option value="false">Pick up only</option>
        </select>
        <label>Seller's Contact Info:</label>
        <input
          required
          placeholder="Phone number or email address"
          value={product.contactInfo}
          name="contactInfo"
          className="input-contact-info"
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProductCreate;
