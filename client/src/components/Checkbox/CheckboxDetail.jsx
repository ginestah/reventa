import React from "react"

const Checked = (props) => <li>
  <input key={props.id} onClick={props.handleCheck} type="checkbox"
    checked={props.isChecked} value={props.value} defaultChecked="false"
    defaultChecked={props.defaultChecked} />{props.value}
</li>
 

export default Checked;