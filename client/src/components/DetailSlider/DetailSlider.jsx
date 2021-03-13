import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./DetailSlider.css";

const DetailSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.photos.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(props.photos) || length <= 0) {
    return null;
  }
  return (
    <section className="detail-slider">
      {props.photos.map((photo, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {length === 1 ? null : (
              <>
                {" "}
                <FaArrowAltCircleLeft
                  className="left-arrow"
                  onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                  className="right-arrow"
                  onClick={nextSlide}
                />
              </>
            )}

            {index === current && <img className="image" src={photo} alt="" />}
          </div>
        );
      })}
    </section>
  );
};
export default DetailSlider;
