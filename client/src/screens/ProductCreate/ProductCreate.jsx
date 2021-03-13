import React from "react";
import "./ProductCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";
import { useState } from "react";

const ProductCreate = (props) => {
  const [imageAdd, setImageAdd] = useState([""]);
  const [isCreated, setCreated] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    photos: [],
    price: "",
    shipping: "",
    contactInfo: "",
    location: "",
    email: props.user.email,
  });
  // console.log(props.user.email)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleImage = (event) => {
    setProduct({
      ...product,
      ["photos"]: [...product.photos, imageAdd],
    });
    setImageAdd("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product, props.user.email);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to="/products" />;
    // can we redirect to the detail page of the product we just created?
  }
  if (!props.user) {
    <div>Loading...</div>;
  }

  return (
    <Layout user={props.user}>
      <div className="add-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="details-container">
            <div>
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
            </div>

            <div>
              <label>Price:</label>
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
              <label>Location: </label>
              <input
                className="input-location"
                placeholder="Location"
                value={product.location}
                name="location"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Shipping:</label>
              <select
                className="input-shipping"
                value={product.shipping}
                name="shipping"
                required
                onChange={handleChange}
              >
                <option value="selected">Please select one</option>
                <option value="true">
                  Available, not included in listing price
                </option>
                <option value="false">Pick up only</option>
              </select>
            </div>

            <div>
              <label>Contact Info:</label>
              <input
                required
                placeholder="Phone number or email address"
                value={product.contactInfo}
                name="contactInfo"
                className="input-contact-info"
                onChange={handleChange}
              />
            </div>

            <div>
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
            </div>

            <div className="form-photos">
              <label>Photos:</label>
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
                    <button
                      className="photo-button"
                      type="button"
                      onClick={handleImage}
                    >
                      Add Image
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="preview-images">{imageJSX}</div>

          {/* https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs */}
          {/* <label>Product Photos:</label>
        {imageAdd.map((x, i) => {
          return (
            <div>
            <input
            required
            className="input-image-link"
            name="photos"
            placeholder="Image Link"
            value={product.photos}
            onChange={handleImage}
            />
            <div className="button-box">
            {imageAdd.length !== 1 && (
              <button onClick={() => handleRemoveClick(i)}>Remove</button>
              )}
              {imageAdd.length < 5 && imageAdd.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
                )}
                </div>
                </div>
                );
              })} */}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductCreate;
