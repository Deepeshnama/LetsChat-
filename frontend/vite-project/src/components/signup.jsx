import { useState } from "react"
import axios from "axios"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"


let Signup=()=> {
      let [name , setName] = useState("")
      let [username, setUsername] = useState("")
      let [email, setEmail] = useState("")
   let [password, setPassword] = useState("")
   

   async function HandleSubmit(e) { 
     e.preventDefault()
      try {
         await axios.post("https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json", { name, username,email, password})
         alert("sucess")
      } catch (error) {
         alert("error")
      }
      setName("")
      setUsername("")
      setEmail("")
      setPassword("")
      
   }

    return(
       <div className="container">
         <form onSubmit={HandleSubmit}>
               <div className="login">
                     <label>Name</label><br/>
                     <Input  placeholder="Name"  value={name}  onChange={(e)=>setName(e.target.value)}width={360}/> <br/>
                     <label>Username*</label> <br/>
                     <Input required placeholder="Username"  value={username}  onChange={(e)=>setUsername(e.target.value)}width={360}/> <br />
                     <label>Email*</label><br/>
                     <Input required placeholder="Email"  value={email}  onChange={(e)=>setEmail(e.target.value)}width={360}/> <br/>
                     <label>Password*</label> <br/>
                     <Input required placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}width={360} />  
                   </div>
                       <br />
                  <Button type="submit"  >SignUp</Button>
             </form> 
       </div>
    )
}

export default Signup