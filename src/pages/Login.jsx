import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    
    const navigate = useNavigate()
    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    const [ruser,setruser] = useState(true)
    
    const users = props.users 


    /*const[users,setusers] = useState([
        {
            username:"Nivetha",
            password:987
        }
    ])*/

    
    function handlename(event)
    {
        seteusername(event.target.value)
    }

    function handlepass(event)
    {
        setepassword(event.target.value)
    }

    function handleuser()
    {
        var userfound = false

        users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login Successfull")
            userfound = true
            navigate("/landing",{state:{user:eusername}})
        }
    })
      
    if(userfound === false)
    {
        console.log("login failed")
        setruser(false)
    }

    }
    
    return( <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
         <h1 className="text-3xl font-medium">Hey Hi</h1>
         {ruser?<p>I help you manage your activities after you login :) </p>: <p className="text-red-500">"Please Sign Up Before you Login!!"</p>}
         
         
    <div className="flex flex-col gap-2 my-2">
        <input type="text" 
        className="w-52 border-black p-1 bg-transparent border rounded-md" 
        placeholder="username"
        onChange={handlename}
        />


<input type="text" 
        className="w-52 border-black p-1 bg-transparent border rounded-md" 
        placeholder="password"
        onChange={handlepass}
        />


        <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={handleuser}>
          Login
        </button>

        <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up </Link></p>
         </div>
        </div>
       </div>
    )
}
export default Login