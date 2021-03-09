import "./Checkbox.css"

const Checkbox = (props) => {
  return (
    <div >
     <input type="checkbox" id="rug" name="rug" value="rug" />
<label htmlFor="rug"> Rug</label>
<input type="checkbox" id="chair" name="chair" value="chair" />
<label htmlFor="chair"> Chair</label>
<input type="checkbox" id="desk" name="desk" value="desk" />
<label htmlFor="desk"> Desk</label>
    </div>
  )
  
}
export default Checkbox;