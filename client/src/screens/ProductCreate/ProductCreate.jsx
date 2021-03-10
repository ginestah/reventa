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
    photos: [],
    price: "",
  });

  const [imageAdd, setImageAdd] = useState([{ imgURL: "" }]);

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

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const image = [...imageAdd];
    image[index][name] = value;
    setImageAdd(image);
  };

  const handleRemoveClick = (index) => {
    const image = [...imageAdd];
    image.splice(index, 1);
    setImageAdd(image);
  };

  const handleAddClick = () => {
    setImageAdd([...imageAdd, { imageURL: "" }]);
  };

  if (isCreated) {
    return <Redirect to="/products" />;
    // can we redirect to the detail page of the product we just created?
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

        {/* https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs */}
        <label>Product Photos:</label>
        {imageAdd.map((x, i) => {
          return (
            <div>
              <input
                required
                className="input-image-link"
                name="imgURL"
                placeholder="Image Link"
                value={x.imgURL}
                onChange={(event) => handleInputChange(event, i)}
              />
              <div className="button-box">
                {imageAdd.length !== 1 && (
                  <button onClick={() => handleRemoveClick(i)}>Remove</button>
                )}
                {imageAdd.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );
        })}

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
        <label>Price: $</label>
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
