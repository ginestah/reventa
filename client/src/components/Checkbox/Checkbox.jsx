import "./Checkbox.css";
import Checked from "./Checked";
import { useState } from "react";

const Checkbox = (props) => {
  const [checkOptions] = useState([
    { id: 1, value: "rug", isChecked: false },
    { id: 2, value: "desk", isChecked: false },
    { id: 3, value: "table", isChecked: false },
    { id: 4, value: "chair", isChecked: false },
    { id: 5, value: "sofa", isChecked: false },
  ]);
  const handleCheck = (e) => {
    if (e.target.checked === true) {
      const newQueriedProducts = props.allProducts.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      checkOptions.forEach((i) => {
        if (i.value !== e.target.value || i.isChecked === true) {
          i.isChecked = false;
        } else {
          i.isChecked = true;
        }
      });
      props.setQueriedProducts(newQueriedProducts);
    } else if (e.target.isChecked === false) {
      props.setQueriedProducts(props.allProducts);
    }
  };
  const handleClick = () => {
    checkOptions.forEach((i) => (i.isChecked = false));
    props.setQueriedProducts(props.allProducts);
  };

  return (
    <>
      <ul className="check-options">
        {checkOptions.map((option, index) => (
          <Checked key={index} handleCheck={handleCheck} {...option} />
        ))}
      </ul>
      <button onClick={() => handleClick()}>Clear Filters</button>
    </>
  );
};
export default Checkbox;
