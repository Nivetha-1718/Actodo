import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    
     
    function handlename(event)
    {
        seteusername(event.target.value)
    }

    function handlepass(event)
    {
        setepassword(event.target.value)
    }

    function handleuse()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }
    return(
       <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
         <h1 className="text-3xl font-medium">Hey Hi</h1>
         <p>you can Signup here :) </p>
         
    <div className="flex flex-col gap-2 my-2">
        <input type="text" 
        className="w-52 border-black p-1 bg-transparent border rounded-md" 
        placeholder="username"
        onChange={handlename}/>


<input type="text" 
        className="w-52 border-black p-1 bg-transparent border rounded-md" 
        placeholder="password"
        onChange={handlepass}/>


<input type="text" 
        className="w-52 border-black p-1 bg-transparent border rounded-md" 
        placeholder="confirm password"/>


        <button className="bg-[#50fc01] w-24 p-1 rounded-md " onClick={handleuse}>
          Sign Up
        </button>

        <p>Already have a account? <Link to={"/"} className="underline">Login </Link></p>
         </div>
        </div>
       </div>
    )
}
export default Signup