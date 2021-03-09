import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = ({_id,name,imgURL,price}) => {
    return (
        <>
            <Link className="product" to={`/products/${_id}`}>
                <img className="product-image" src={imgURL} alt={name} />
                <div className="product-name">{name}</div>
                <div className="price">{`$${price}`}</div>
            </Link>
        </>
    )
}

export default Product