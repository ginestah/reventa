import "./Checkbox.css"


const Checkbox = (props) => {
  return (
    <div >
      
      <input type="checkbox" id="rug" name="rug" value="rug" onClick={e=>props.onClick(e) }/>
<label htmlFor="rug"> Rug</label>
<input type="checkbox" id="chair" name="chair" value="chair" onClick={e=>props.onClick(e) }/>
<label htmlFor="chair"> Chair</label>
<input type="checkbox" id="desk" name="desk" value="desk" onClick={e=>props.onClick(e) }/>
      <label htmlFor="desk"> Desk</label>
      <input type="checkbox" id="table" name="table" value="table" onClick={e=>props.onClick(e) }/>
<label htmlFor="table"> Table</label>
    </div>
  )
  
}
export default Checkbox;