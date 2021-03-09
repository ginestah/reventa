import "./Checkbox.css"

const Checkbox = (props) => {
  return (
    <div >
      <input type="checkbox" id="rug" name="rug" value="rug" onClick={e=>props.handleClick(e) }/>
<label htmlFor="rug"> Rug</label>
<input type="checkbox" id="chair" name="chair" value="chair" onClick={e=>props.handleClick(e) }/>
<label htmlFor="chair"> Chair</label>
<input type="checkbox" id="desk" name="desk" value="desk" onClick={e=>props.handleClick(e) }/>
<label htmlFor="desk"> Desk</label>
    </div>
  )
  
}
export default Checkbox;