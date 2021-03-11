import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  const [num, setNum] = useState(0);
  // const [show, setIsShow] = useState(true);
  // const [isClicked, setIsClicked] = useState(false);
  const [imageAdd, setImageAdd] = useState([""]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    photos: [...imageAdd],
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

  // const handleRemoveClick = (index) => {
  //   const image = [...imgList];
  //   image.splice(index, 1);
  //   setImgList(image);
  // };

  // const handleAddClick = () => {
  //   setImgList([...imgList, { imageURL: "" }]);
  // };

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
  // const increment = () => {
  //   setNum(num + 1);
  //   setIsClicked(true);
  //   console.log(num);
  //   if (num < 5) {
  //     setIsShow(true);
  //     console.log(show);
  //   } else {
  //     setIsShow(false);
  //   }
  // };

  const handleImage = (event) => {
    setProduct({
      ...product,
      ["photos"]: [...product.photos, imageAdd],
    });
    setImageAdd("");
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

          {imgList.map((x, i) => {
            return (
              <div>
                <input
                  className="input-photo"
                  placeholder="Photo"
                  value={product.photos.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                />
              
                <div className="button-box">
                  {imgList.length !== 1 && (
                    <button onClick={() => handleRemoveClick(i)}>Remove</button>
                  )}
                  {imgList.length < 5 && imgList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>
            );
          })}

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
