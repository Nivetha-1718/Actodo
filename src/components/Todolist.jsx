import { useState } from "react"
import TodoItem from "./Todoitem"
function TodoList(props)
{
   const active = props.active
   const setactive = props.setactive
    return(
    <div className="bg-[#28be78f1] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
       
        {active.length==0? <p>you haven't added anything yet</p>:""}
        {
            active.map(function(item,index){
                return<TodoItem id={item.id} activity={item.activity} index={index} active={active} setactive={setactive}/>
            })
        }
   </div>
    )
}

export default TodoList