import "./Checkbox.css";
import Checked from "./Checked";
import { useState } from "react";

const Checkbox = (props) => {
  const [checkOptions] = useState([
    { id: 1, value: "Rug", isChecked: false },
    { id: 2, value: "Desk", isChecked: false },
    { id: 3, value: "Table", isChecked: false },
    { id: 4, value: "Chair", isChecked: false },
    { id: 5, value: "Sofa", isChecked: false },
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
      <button className="clear" onClick={() => handleClick()}>Clear Filters</button>
    </>
  );
};
export default Checkbox;
