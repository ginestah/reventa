import "./Checkbox.css"
// import CheckboxDetails from "./CheckboxDetail"


const Checkbox = (props) => {
  // const [checkOptions, setCheckOption] = useState([
  //   { id: 1, value: "Rug", isChecked: false },
  //   { id: 2, value: "Desk", isChecked: false },
  //   { id: 3, value: "Table", isChecked: false },
  //   { id: 4, value: "Chair", isChecked: false },
  //   { id: 5, value: "sofa", isChecked: false }

  // ])

  // const handleCheck = (e) => {
  //   let checks = checkOptions
  //   checks.forEach(option => {
  //     if (option.value === e.target.value)
  //       option.isChecked = e.target.checked
  //   })
  //   setCheckOption(checkOptions)
  // }

  return (
    <form onSubmit={(e) => props.onSubmit(e)} onChange={e => (props.onChange(e))} >
      <div>
        <input type="checkbox" id="rug" name="rug" value="rug" />
        <label htmlFor="rug"> Rug</label>
        <input type="checkbox" id="chair" name="chair" value="chair"  />
        <label htmlFor="chair"> Chair</label>
        <input type="checkbox" id="desk" name="desk" value="desk"  />
        <label htmlFor="desk"> Desk</label>
        <input type="checkbox" id="table" name="table" value="table" />
        <label htmlFor="table"> Table</label>

      </div>
    </form>

    // <ul>
    //   {checkOptions.map((option) => (<CheckboxDetails handleCheck={handleCheck} {...option} />

    //   ))
    //   }
    // </ul>


  )

}
export default Checkbox;