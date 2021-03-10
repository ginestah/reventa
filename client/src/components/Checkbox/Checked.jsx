import React from "react";

const Checked = (props) => (
  <li>
    <input
      key={props.id}
      onChange={props.handleCheck}
      type="checkbox"
      checked={props.isChecked}
      value={props.value}
      defaultChecked={props.defaultChecked}
    />
    {props.value}
  </li>
);

export default Checked;
