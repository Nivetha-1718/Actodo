function TodoItem(props)
{
    const active = props.active
    const setactive = props.setactive

    function handleDelete(deleteid){
     var temp = active.filter(function(item){
        if(item.id == deleteid)
        {
            return false
        }else{
            return true
        }
     })
     setactive(temp)
    }
    return(
    <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
    )
}

export default TodoItem