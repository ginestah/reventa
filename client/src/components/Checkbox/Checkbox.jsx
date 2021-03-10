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
    const value = e.target.value;
    console.log(value);
    checkOptions.forEach((option) => {
      if (value) {
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
      } else {
        props.setQueriedProducts(props.allProducts);
      }
    });
  };

  return (
    <ul className="check-options">
      {checkOptions.map((option, index) => (
        <Checked key={index} handleCheck={handleCheck} {...option} />
      ))}
    </ul>
  );
};
export default Checkbox;
