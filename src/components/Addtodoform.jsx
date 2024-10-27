import { useState } from "react"

function AddTodoForm(props)
{
    const active = props.active
    const setactive = props.setactive

    const [arr,setarr] = useState("")

    function handlevalue(evt)
    {
      setarr(evt.target.value)
    }

    function handleadd()
    {
      setactive([...active,{id:active.length+1,activity:arr}])
      setarr("")
    }
    return(
    <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
    <div>
        <input value={arr} onChange={handlevalue}type="text"  className="border border-black bg-transparent p-1" placeholder="Next Activity"/>
        <button onClick={handleadd} className="bg-black p-1 text-white border border-black">Add</button>
    </div>
    </div>
    )
}
export default AddTodoForm