import AddTodoForm from "./Addtodoform"
import TodoList from "./Todolist"
import { useState } from "react"
function Todocontainer()
{
    const[active,setactive]=useState([
        {
            id:1,activity:"Go for a walk"
        }
    ])
    return(
        <div>
           < div className="flex flex-wrap gap-5">
             <AddTodoForm active={active} setactive={setactive}/>
             <TodoList active={active} setactive={setactive}/>
            </div>
        </div>
    )
}
export default Todocontainer