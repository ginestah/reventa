import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.products.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(props.products) || length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      {props.products.map((product, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
            />
            {index === current && (
              <>
                <img className="image" src={product.photos[0].imgURL} alt="" />
                <Link to={`/products/${product._id}`}>
                  <p>View Listing</p>
                </Link>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Slider;
