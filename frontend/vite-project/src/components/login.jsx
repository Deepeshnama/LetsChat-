import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
// import useHistory from 'react-router-dom'
import { useNavigate } from "react-router-dom"



import axios from "axios"

const Loginpage=()=> {
    let [email , setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState('')

    let navigate= useNavigate()
    
    
    async function HandleSubmit(e) { 
        e.preventDefault()
        console.log( "Email: " , email)
        console.log("Password: ",password)
        try {
            setLoading(true)
            setError("")
            
            let response = await axios.post("https://login-signup-ndpt.onrender.com/user/login", { email, password })    
               console.log(response)
            if (response.status == 200) {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate("/dashboard")
                alert("sucessful logged in")
              
            } 
                       
            alert("Data saved successfully")
        } catch (error) {
            setError( "Inavlid" )
            
            alert("error while logging in")
        } finally { 
            setLoading(false)
        }
        setEmail("")
        setPassword("")

    }
   
 


    return(
       <div className="container">
        
            <form onSubmit={HandleSubmit}>
                    <div className="login">
                        <label>Email*</label> <br/>
                        <Input required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} width={360} style={{borderColor:'black', border:'2px solid black'}} />
                        <br/>
                        <label>Password*</label> <br/>
                        <Input required placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} width={360} style={{borderColor:'black', border:'2px solid black'}}/>
                        
                        
                       
                        
                     </div>
                        <br />
                       <Button type="submit"  
                    disabled={loading} style={{ backgroundColor: "blue", color: 'white' }} >{loading ? "Loading..." : "Login"}</Button>
                     
                {error && <p style={{color:"red" , margintop:"20px"}}>{ error }</p> }

                

                    
            </form>
       </div>
    )
}

export default Loginpage






